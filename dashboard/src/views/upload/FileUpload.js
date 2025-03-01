import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';

import {
  Card,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:3001/file/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        }
      });
      
      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 10000);

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0)
    }
  };

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
        <Container fluid>
          <Row>
            <Col>
              <Card>
                <input type='file' id='customFile' onChange={onChange} />
                <Progress percentage={uploadPercentage} />
                <Button onClick={onSubmit} value='Upload'>Upload</Button>
                {uploadedFile ? (
                  <div className='row mt-5'>
                    <div className='col-md-6 m-auto'>
                      <h3 className='text-center'>{uploadedFile.fileName}</h3>
                      <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
                    </div>
                  </div>
                ) : null}
              </Card>
            </Col>
          </Row>
        </Container>
    </Fragment>
  );
};

export default FileUpload;