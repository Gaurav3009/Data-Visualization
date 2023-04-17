import React from 'react';
import '../style/Output.scss';
import { useFileContext } from './FileContext';

function Output() {
  const {imageReceived, f} = useFileContext();
  console.log(imageReceived);
    return (
      <section className="top-output">
        <div><img src = {imageReceived} alt = "Graph"/></div>
        {/* <div><a href = {imageReceived} download = "image-download.jpeg">Download</a></div> */}
      </section>
    )
}

export default Output