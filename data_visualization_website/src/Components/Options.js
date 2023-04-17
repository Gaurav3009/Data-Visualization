import React from 'react';
import '../style/Options.scss';
import { useFileContext } from './FileContext';

function Options() {
  const {setChart, chart, fileUploaded, setImageReceived, setF} = useFileContext();
  // let formData = new FormData();
  //   formData.append('csv', fileUploaded);
  //   console.log(formData);

  const handleClick = () => {
    let formData = new FormData();
    formData.append("csv", fileUploaded);
    formData.append("graphName", chart);
    fetch(`http://localhost:8081/file/upload`, {
      method: 'POST',
      body: formData
    })
      .then(response => {
        console.log(response);
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Failed to upload file');
        }
      }).then((data)=> {
        setImageReceived(`http://localhost:8081/file/images/${JSON.parse(data).fileName}`);
        setF(true);
      }).catch(error => {
        console.error(error);
      });

  }

  return (
    <section className="top-option">
      <section className="top-left">
        <h2>Select the type of chart</h2>
        <button onClick={handleClick}>Generate</button>
      </section>
      <section className="top-right">
        <select id="charts" onChange = {(e) => {
          e.preventDefault();
          const index = e.target.selectedIndex;
          const el = e.target.childNodes[index]
          const option =  el.getAttribute('id'); 
          setChart(option);
        }}>
          <option id = "line" value="Line Chart">Line Chart</option>
          <option id = "pie" value="Pie Chart">Pie Chart</option>
          <option id = "bar" value="Bar Chart">Bar Chart</option>
          <option id = "histogram" value="Histogram">Histogram</option>
          <option id = "scatter" value="Scatter Plot">Scatter Plot</option>
          <option id = "area" value="Area Chart">Area Chart</option>
          <option id = "bubble" value="Bubble Chart">Bubble Chart</option>
        </select>
      </section>
    </section>
  )
}

export default Options