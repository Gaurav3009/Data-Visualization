import React from 'react';
import '../style/Upload.scss';
import { useFileContext } from './FileContext';


function Upload() {
  const {setFileUploaded} = useFileContext();
  return (
    <section className="top">
        <section className="top-heading">
        <h2>Upload Files</h2>
        </section>
        <section className="top-upload">
          <form >
          <input type="file" name = "file"  onChange = {(e) => {
            e.preventDefault();
            setFileUploaded(e.target.files[0]);
            console.log(e.target.files);
          }}/>
          </form>
        </section>
    </section>
  )
}

export default Upload