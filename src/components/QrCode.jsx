import { useState } from "react";


export const QrCode = () => {
    const [img,setImg] = useState("");
    const [loading,setLoading] = useState(false);
    const [qrcode,setQrcode] = useState("Naveen");
    const [qrsize,setQrSize] = useState("150");

   async function generateQr()
    {
        setLoading(true);
        try
        {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}&data=${encodeURIComponent(qrcode)}`;
            setImg(url);
        }
        catch(error)
        {
            console.log("Error Occured During The Generation " + error);
        }
        finally{
            setLoading(false);
        }
    }
    function download()
    {
        fetch(img).then((response)=>response.blob()).then((blob)=>{
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "QRCode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).catch((error)=>{
            console.log("Error Occured During Downloading " + error);
        })
    }
  return (
    <div className="main">
    <div className="container">
        <h1>Qr Code Generater </h1>
        {loading && <p className="loading">Please Wait ...</p>}
        {img && <img src={img} className="qrcode-img"/>}

        <div>
            <label htmlFor="Data" className="input-label">
                Data Input For Code :
            </label>
            <input type="text" id="data" placeholder="Enter The Data" value={qrcode} onChange={(e)=>setQrcode(e.target.value)}/>
            <label htmlFor="size" className="input-label">
                Image Size (eg : 200): 
            </label>
            <input type="text" id="size" placeholder="Enter The Image Size " value={qrsize} onChange={(e)=>setQrSize(e.target.value)}/>

            <button className="generate" onClick={generateQr}>Generate Qr</button>
            <button className="download" onClick={download}>Download Qr</button>
        </div>
        <p className="authorName">Designed By <a href="www.linkedin.com/in/n-naveen-kumar-b6a74a299">N.Naveen {"->"}</a></p>
    </div>
    </div>
  )
}

export default QrCode;