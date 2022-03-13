import Head from 'next/head'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function Home() {
  return (
    <div class="test">
      <Head>
        <title>Caleb Shelton</title>
        <link rel="icon" href="/favicon.ico" />
        <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;1,500&display=swap"
            rel="stylesheet"
          />
      </Head> 

      <div className="main">
            <div className="bio">
                <h1>Hello! 👋 I'm
                  <RoughNotation type="highlight" show={true} color="#fff176"> Caleb</RoughNotation>, a developer based in Cambridge.</h1>
                <div className="paragraph">
                    I am a Cambridge based
                    <RoughNotation type="underline" show={true} color="#000000"> Software Engineer </RoughNotation> 
                    and
                    <RoughNotation type="underline" show={true} color="#000000"> First Class Graduate </RoughNotation>
                    of Computer Science. <br /> My department awarded me
                    <RoughNotation type="highlight" show={true} color="#fff176"> 'the best individual performance by a BSc Computing student'.</RoughNotation>
                    <br />
                    I am highly solution focused and excel in problem solving environments. <br />I work
                    full-time as a Software Engineer at Unipart Digital solving complex logistical
                    challenges using Linux, Python, Docker, and cloud technologies.
                </div>
                <div className="buttons">
                    <button>View LinkedIn</button>
                    <button>View Github</button>
                </div>
            </div><div className="picture">
                <img src="snippet.svg" />
                
            </div>
      </div>

      <style jsx global>{`

        * {
          margin: 0;
        }

        body {
          font-family: 'Poppins', sans-serif;

          background-color: rgb(255, 253, 249);
          margin-bottom: 100px;
        }
      `}</style>

      <style jsx>{`
        * {
          margin: 0;
        }
        
        .main {
            width: 60%;
            margin: auto;
            padding-top: 150px;
            line-height: 2;
        }
        
        .bio {
            color: rgb(22, 22, 22);
            width: 70%;
            display: inline-block;
        }
        
        .picture {
            width: 30%;
            display: inline-block;
            vertical-align: top;
            overflow-wrap: break-word;
        }
        
        .half {
            width: 50%;
            display: inline-block;
            vertical-align: top;
            overflow-wrap: break-word;
            font-size: medium;
        }
        
        .paragraph {
            margin-top: 15px;
            font-size: medium;
            padding-right: 20px;
        }
        
        .buttons {
            margin-top: 20px;
        }
        
        h1 {
            line-height: 1.5;
        }
        
        h2 {
            font-weight: 600;
            font-size: medium;
        }
        
        h3 {
            font-weight: 500;
            font-size: medium;
        }
        
        img {
            padding-top: 75px;
            width: 350px;
        }
      `}</style>
    </div>
  )
}
