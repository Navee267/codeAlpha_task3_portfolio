import { useState } from "react"

export const Practice = () => {
  const [img,setImg] = useState();
  const [data,setData] = useState("Flower")
  const [size,setsize] = useState(150);
  function generateImage(){
    try{
      const url = `https://picsum.photos/${size}/${size}?${data}`;
      setImg(url);
    }
    catch(error)
    {
      console.log("Error is Occured During The Generation " + error);
    }
    finally{
      console.log("Successfully Generated");
    }
  }
  function DownloadImage()
    {
        fetch(img).then((response)=>response.blob()).then((blob)=>{
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "RandomImage.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).catch((error)=>{
            console.log("Error Occured During Downloading " + error);
        });
    };
  return (
    <div className="container">
      <h1>Random Image Generator</h1>
      {img && <img src={img} className="qrcode-img"/>}
      
      <div className="inputs">
      <div>
      <label htmlFor="imageInput" >Enter Image Name  </label>
      <input type="text" id="imageName" value={data} onChange={(e)=>setData(e.target.value)}/>
      </div>
      <div>
      <label htmlFor="sizeInput">Enter Size  </label>
      <input type="text" id="size" onChange={(e)=>setsize(e.target.value)} value={size}/>
      </div>
      </div>
      <div className="buttons">
      <button onClick={generateImage}>Generate</button>
      <button onClick={DownloadImage}>Download</button>
      </div>

      <p>Designed By : <a href="#">N.Naveen</a></p>
    </div>
  )
}

export default Practice;