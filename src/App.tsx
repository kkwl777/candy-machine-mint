import "./App.css";
import { useMemo } from "react";

import Home from "./Home";
import Toolbar from "@material-ui/core/Toolbar";
import * as anchor from "@project-serum/anchor";
import Grid from '@material-ui/core/Grid'
import { Button,  } from "@material-ui/core";
import Background from "./background7.jpg";


import gify from "./1.gif";
import burn from "./burn.gif";

import cash from "./cash.png";
import atlas1 from "./atlas1.png";
import atlas2 from "./atlas2.png";


import gith from "./gith.png";
import twitter from "./twitter.png";
import disc from "./disc.png";

import ecosys from "./ecosys.png";
import exp from "./4.png";

import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,  
  getSolletWallet,
  getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { createTheme, ThemeProvider } from "@material-ui/core";


const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);

const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const theme = createTheme({
    palette: {
        type: 'dark',
    },
    overrides: {
        MuiButtonBase: {
            root: {
                justifyContent: 'flex-start',
            },
        },
        MuiButton: {
            root: {
                textTransform: undefined,
                padding: '12px 16px',
            },
            startIcon: {
                marginRight: 8,
            },
            endIcon: {
                marginLeft: 8,
            },
        },
    },
});

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
        getPhantomWallet(),
        getSlopeWallet(),
        getSolflareWallet(),
        getSolletWallet({ network }),
        getSolletExtensionWallet({ network })
    ],
    []
  );
  // backgroundImage: `url(${Background})`
  return (
    <Grid container>
    <Grid item xs={12}   style={{  backgroundColor:'background: rgb(0,0,0)', background:'linear-gradient(128deg, rgba(0,255,175,1) 2%, rgba(75,240,255,1) 7%, rgba(0,123,255,1) 11%, rgba(208,78,255,1) 34%, rgba(117,93,255,1) 46%, rgba(53,149,255,1) 64%, rgba(33,193,199,1) 82%, rgba(25,211,175,1) 85%, rgba(246,24,241,1) 100%)', backgroundPosition: 'center', 
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}> 
    

      <ThemeProvider theme={theme}>
        
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect >
            <WalletDialogProvider>
            <Toolbar style={{background:'#000'  ,fontFamily:"Cairo" ,fontSize:'60px' ,justifyContent:'right', alignItems:'right',height:'10vh'}}> 
         
            <div style={{width:'84vw' ,fontFamily:"Cairo"}}> Solana Galaxy Squids v1</div>
            <div style={{width:'16vw'}}>
            <Button ><a href="https://github.com/SolanaGalaxySquids" target="_blank" rel="noopener noreferrer"><img style={{height:'3.5vh'}}src={gith} alt="loading..." /></a></Button>
            <Button ><a href="https://discord.gg/xW4U5P3vUf" target="_blank" rel="noopener noreferrer"><img style={{height:'4vh'}}src={disc} alt="loading..." /></a></Button> 
            
              <Button ><a href="https://twitter.com/GalaxySquidsXyz" target="_blank" rel="noopener noreferrer"><img style={{height:'2.5vh'}}src={twitter} alt="loading..." /></a></Button> </div> 
             
             
             </Toolbar>

             <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '2vh', paddingTop:'80px', paddingBottom:'0px',
              }}> 

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10vw'}}></div>
              <h1 style={{fontFamily:"Cairo" ,fontSize:'48px', }}>990 v1 Squids - ◎ 0.25 </h1> 

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10vw'}}></div>
              

              
              
             </div >  
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh', paddingTop:'0px', paddingBottom:'0px',
              }}> 

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10vw'}}></div>
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '400px' ,height: '400px', backgroundColor:'##fff' , borderRadius: "10px", overflow:'hidden', padding:'8px'}}>
              
              <img style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100%' ,height: '100%',}}src={gify} alt="loading..." />
                </div> 
           

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10vw'}}></div>
              

              
              
             </div >                 <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '2vh', paddingTop:'0px', paddingBottom:'48px',
              }}> 

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10vw'}}></div>
              <Home
              
              candyMachineId={candyMachineId}
              config={config}
              connection={connection}
              startDate={startDateSeed}
              treasury={treasury}
              txTimeout={txTimeout} 
              
            />  

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10vw'}}></div>
              

              
              
             </div >    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh', paddingTop:'90px', paddingBottom:'48px',
              }}> 

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '15vw'}}></div>

              <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '70vw' ,height: '650px', padding:'8px',backgroundColor:'#1f1f1f' ,opacity: 0.95, borderRadius: "10px", overflow:'hidden'}} > 
              
              <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '45%' ,height: '650px', backgroundColor:'#0f1012'}}>
                <div style={{width:'100%' ,padding:'18px', paddingLeft:'36px'}} ><h1 style={{fontFamily:"Cairo" ,fontSize:'48px', }}>100% Royalties + 30% Mint to Sweep the Floor</h1>  <div   style={{ paddingTop:'4px'}}>

                  {/*  <p  style={{fontFamily:"Cairo"}}>The Cthuwu Collection consists of 10,00 squids stored on-chain via metaplex candy machine. 
                    Squid holders get access to the exclusive squid community and all giveaways.  10,000 unique generative Squids on Solana </p> */}
  
                    <p style={{fontFamily: "Cairo"}}> As of October 19th Squids are venturing out into space. Unfortunately, the average squid is not suited deep space exploration and most of them are not gonna make it. 
 </p>
<p style={{fontFamily: "Cairo"}}>Whether it's because of incompetence or the threat of apex predators like sharks and geckos, Squid lives are lost almost every week. </p>
<p  style={{fontFamily: "Cairo"}}>Great calamaties like black holes and supernovas can take out even those with the strongest wills. (Burn events)  </p>
<p  style={{fontFamily: "Cairo"}}>Swept squids will be sent to a burn wallet and thus be removed from circulation.</p>
    
            
            </div></div>
               
                </div><div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '5%' ,height: '650px', backgroundColor:'#0f1012' ,}} > 
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '350px' ,height: '350px', backgroundColor:'#0f1012' , borderRadius: "10px", overflow:'hidden'}}>
        
              <div style={{width:'100%' ,padding:'0px'}} >              
              {/* <p >Status:</p>
    
               <p  style={{fontFamily:"Cairo"}}>Genesis Mint</p> 
        
               <p  style={{fontFamily:"Cairo"}}>Exclusives:</p>
               <p  style={{fontFamily:"Cairo"}}>Solana bg</p> 
               <p  style={{fontFamily:"Cairo"}}>SoLands bg</p>  
               <p  style={{fontFamily:"Cairo"}}>UpOnly bg</p>  */}
</div>
                </div>
                </div>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '50%' ,height: '650px', backgroundColor:'#0f1012'}} > 
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '600px' ,height: '400px', backgroundColor:'#0f1012' , borderRadius: "10px", overflow:'hidden'}}>
              <img style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100%' ,height: '100%', }}src={burn} alt="loading..." />
                </div> 
              
                </div>  
                
              </div>

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10vw'}}></div>
              

              
              
             </div >         {/* //CARD START*/}
          
             {/* //CARD START*/}
             <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '400px', paddingTop:'48px'
              }}> 

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '15vw'}}></div>

              <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '70vw' ,height: '400px', backgroundColor:'#1f1f1f' ,opacity: 0.95, borderRadius: "10px",padding:'8px', overflow:'hidden'}} > 
              
          
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '45%' ,height: '400px', backgroundColor:'#0f1012'}} > 
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '350px' ,height: '350px', backgroundColor:'#0f1012' , borderRadius: "10px", overflow:'hidden'}}>
              <img style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100%' ,height: '100%'}}src={ecosys} alt="loading..." />

                </div>   
                </div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10%' ,height: '400px', backgroundColor:'#0f1012' ,}} > 
                
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '350px' ,height: '350px', backgroundColor:'#0f1012' , borderRadius: "10px", overflow:'hidden'}}>
                
              <div style={{width:'100%' ,padding:'0px'}} > </div>
                </div>
                </div>    <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '45%' ,height: '400px', backgroundColor:'#0f1012'}}>
                <div style={{width:'100%' ,padding:'12px'}} ><h1 style={{fontFamily:"Cairo" ,fontSize:'36px'}}>On Chain Traits</h1>  <div   style={{ paddingTop:'4px'}}>
                  
                  {/* buttton  */}
                  <p style={{fontFamily: "Cairo"}}> 
                  Each squid's metadata is stored on Arweave, a permanent decentralized data storage that is used as the Solana on-chain standard. With 100+ possible traits varying in rarity spread over 6 layers, each mint gives you the chance to get a unique, rare squid.
             
               
                  </p>
                 
                
                  <p style={{fontFamily: "Cairo"}}> 
                  Squids will reside permenantly on Solana. Owners have full commercial rights.
                 
             
               
                  </p>   
                  </div></div>
               
                </div>
              </div>

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10vw'}}></div>
              
             </div>
             <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '400px', paddingTop:'48px'
              }}> 

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '15vw'}}></div>

              <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '70vw' ,height: '400px', backgroundColor:'#1f1f1f' ,opacity: 0.95, borderRadius: "10px",padding:'8px', overflow:'hidden'}} > 
              
          
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '45%' ,height: '400px', backgroundColor:'#0f1012'}} > 
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '350px' ,height: '350px', backgroundColor:'#0f1012' , borderRadius: "10px", overflow:'hidden'}}>
              <img style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100%' ,height: '100%'}}src={exp} alt="loading..." />

                </div>   
                </div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10%' ,height: '400px', backgroundColor:'#0f1012' ,}} > 
                
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '350px' ,height: '350px', backgroundColor:'#0f1012' , borderRadius: "10px", overflow:'hidden'}}>
                
              <div style={{width:'100%' ,padding:'0px'}} > </div>
                </div>
                </div>    <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '45%' ,height: '400px', backgroundColor:'#0f1012'}}>
                <div style={{width:'100%' ,padding:'12px'}} ><h1 style={{fontFamily:"Cairo" ,fontSize:'36px'}}>Collab #1: Explore SoLands</h1>  <div   style={{ paddingTop:'4px'}}>
                  
                  {/* buttton  */}
                  <p style={{fontFamily: "Cairo"}}> 
                  -Squids are surfacing in different parts of the Solana system. Some have come accross a new frontier. 
                 
             
               
                  </p>
                 
                
                  <p style={{fontFamily: "Cairo"}}> 
                  -Squids will grow with the Solana ecosystem and support quality projects based on community interest.
                 
             
               
                  </p>   <p  style={{fontFamily:"Cairo"}}> 
                   <h1 style={{fontFamily:"Cairo" ,fontSize:'20px'}}>
                   SOLANDS.XYZ v2 Coming soon
                  <a href="https://solands.xyz/#/" target="_blank" rel="noopener noreferrer" >→ </a></h1> 
                  </p>
                  </div></div>
               
                </div>
              </div>

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10vw'}}></div>
              
             </div>
             
  {/* //CARD START*/}
  
         
                                 {/* //CARD START*/}
                                 <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '1000px', paddingTop:'48px',
              }}> 

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '15vw'}}></div>

              <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '70vw' ,height: '1000px', backgroundColor:'#1f1f1f' ,opacity: 0.95, borderRadius: "10px",padding:'8px', overflow:'hidden'}} > 
              
          
     
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '5%' ,height: '1000px', backgroundColor:'#0f1012' ,}} > 
                
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '400px' ,height: '1000px', backgroundColor:'#0f1012' , borderRadius: "10px", overflow:'hidden'}}>
                
              <div style={{width:'100%' ,padding:'0px'}} > </div>
                </div>
                </div>    <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '85%' ,height: '1000px', backgroundColor:'#0f1012'}}>
                <div style={{width:'100%' ,padding:'4px'}} ><h1 style={{fontFamily:"Cairo" ,fontSize:'36px'}}>Roadmap v1</h1>  <div   style={{ paddingTop:'4px'}}>

                 <p  style={{fontFamily:"Cairo" ,fontSize:'20px',textDecorationLine: 'line-through'}}> 
                 
                 -Generate unique squids </p> 
                <p  style={{fontFamily:"Cairo" ,fontSize:'20px',textDecorationLine: 'line-through'}}> 
                 
                  -Create NFT candy machine and website v1 </p> 
                  <p  style={{fontFamily:"Cairo" ,fontSize:'20px'}}> 
                 
                  -Stealth launch genesis mint to fund official launch  {'<<'} </p> 
                  <p  style={{fontFamily:"Cairo" ,fontSize:'20px'}}> -Official launch with 30% of all minted ◎ sent to a community wallet. 
 </p> 
 <p  style={{fontFamily:"Cairo" ,fontSize:'20px'}}>  -Get listed on secondary markets 
</p>
<p  style={{fontFamily:"Cairo" ,fontSize:'20px'}}>  -Floor sweeps; Paper hand squids will be bought and sent to a burn wallet, thus being removed from circulation. 
</p>
 <p  style={{fontFamily:"Cairo" ,fontSize:'20px'}}> -Integrate Grape Protocol for exclusive perks (verification, private channels, rewards)
 </p>
 <p  style={{fontFamily:"Cairo" ,fontSize:'20px'}}> -Art battle with winners chosen by verified holders
 </p>

<p  style={{fontFamily:"Cairo" ,fontSize:'20px'}}> -Grand Squid Giveaway at 100% minted
 </p>
 <p  style={{fontFamily:"Cairo" ,fontSize:'20px'}}> -Host Squid Hackathon for an open source website redesign 
 </p>

 <p  style={{fontFamily:"Cairo" ,fontSize:'20px'}}> -3D Squids modeled after the community's favorite submissions from the art battle</p>
 <p  style={{fontFamily:"Cairo" ,fontSize:'20px'}}> -Claim Metaverse Squid territory</p>




                  </div></div>
               
                </div>        





                
                 <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10%' ,height: '1000px', backgroundColor:'#0f1012'}} > 
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '600px' ,height: '1000px', backgroundColor:'#0f1012' , borderRadius: "12px", overflow:'hidden'}}>
                <div style={{ width: '400px' ,height: '400px'}}>
              {/* <img style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '400px' ,height: '400px',borderRadius: "12px"}}src={gec} alt="loading..." />A single gecko with fulltime crypto dreams */}
              </div> 
                </div>   
                </div>
              </div>

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10vw'}}></div>
              
             </div>
  
 
   
             {/* <h1 style={{fontFamily:"Cairo" ,fontSize:'36px',padding:'12px'}}> Star Atlas Squid Guild?</h1> */}
              {/* <img style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100%' ,height: '1000px',borderRadius: "12px" }}src={atlas1} alt="loading..." />
             <img style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100%' ,height: '1000px',borderRadius: "12px"}}src={atlas2} alt="loading..." />    
         */}



               <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '200px', paddingTop:'48px',paddingBottom:'48px' }}> 


              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100vw' ,height: '200px', backgroundColor:'#1f1f1f' , borderRadius: "10px", overflow:'hidden'}} > 
              
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100%' ,height: '200px', backgroundColor:'#0f1012'}}>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100%' ,height: '200px', backgroundColor:'#0f1012'}}>
                   <h1 style={{fontFamily:"Cairo" ,fontSize:'36px'}}> More TBA </h1>
       </div>
               
           
           

               </div>

              

              </div>
              
             </div> 
             <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh',backgroundColor:'#000',opacity: 0.0}}>            
 </div>
             <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh',backgroundColor:'#000',opacity: 0.0}}> 
             <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '10vw'}}></div>
             
             <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '80vw' ,height: '100vh', backgroundColor:'#000'}}> 
             </div>
          
             
             <div style={{display: 'flex',  justifyContent:'right', alignItems:'right', width: '10vw'}}></div>
              
           
              </div>
          
            </WalletDialogProvider>
          </WalletProvider>
        </ConnectionProvider>
        Built on Solana
      </ThemeProvider>
      </Grid>

      
    
   

    
</Grid>

  );
};

export default App;
