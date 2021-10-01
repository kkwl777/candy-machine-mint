import "./App.css";
import { useMemo } from "react";

import Home from "./Home";
import Toolbar from "@material-ui/core/Toolbar";
import * as anchor from "@project-serum/anchor";
import Grid from '@material-ui/core/Grid'
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Background from "./background4.jpg";
import gify from "./1.gif";
import logo from "./LOGO1.png";

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

  return (
    <Grid container>
    <Grid item xs={12}   style={{background: `url(${Background})`, backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}> 
    

      <ThemeProvider theme={theme}>
        
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect >
            <WalletDialogProvider>
            <Toolbar style={{background:'#000'  ,fontFamily:"Times New Roman" ,fontSize:'60px' ,justifyContent:'right', alignItems:'right',height:'10vh'}}> 
            <div style={{width:'10vw'}}> <img style={{height:'10vh'}}src={logo} alt="loading..." /></div>
            <div style={{width:'80vw' ,fontFamily:"Times New Roman"}}>Project Cthuwu</div>
            <div style={{width:'10vw'}}><Button>Discord</Button> 
              <Button>Twitter</Button> </div>
             
             
             </Toolbar>


              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '40vh', paddingTop:'90px', paddingBottom:'48px',
              }}> 

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '15vw'}}></div>

              <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '70vw' ,height: '50vh', padding:'8px',backgroundColor:'#1f1f1f' ,opacity: 0.95, borderRadius: "10px", overflow:'hidden'}} > 
              
              <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '45%' ,height: '50vh', backgroundColor:'#0f1012'}}>
                <div style={{width:'100%' ,padding:'24px', paddingLeft:'36px'}} ><h1 style={{fontFamily:"Times New Roman" ,fontSize:'48px', }}>10,000 unique generative Squid NFTs</h1>  <div   style={{ paddingTop:'4px'}}>

                  <p>The Cthuwu Collection consists of 10,00 unique generative squids. All squids are stored on-chain via metaplex candy machine. 
                    Squid holders get access to the exclusive squid community and rights to vote on the format of future events. </p>
                  <Home
              
              candyMachineId={candyMachineId}
              config={config}
              connection={connection}
              startDate={startDateSeed}
              treasury={treasury}
              txTimeout={txTimeout} 
              
            /> 
            
            </div></div>
               
                </div>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '45%' ,height: '50vh', backgroundColor:'#0f1012'}} > 
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '350px' ,height: '350px', backgroundColor:'#ffff' , borderRadius: "10px", overflow:'hidden'}}>
              <img style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100%' ,height: '100%'}}src={gify} alt="loading..." />
                </div> 
              
                </div>  
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10%' ,height: '50vh', backgroundColor:'#0f1012' ,}} > 
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '350px' ,height: '350px', backgroundColor:'#0f1012' , borderRadius: "10px", overflow:'hidden'}}>
        
              <div style={{width:'100%' ,padding:'0px'}} >              <Button >-Credits-</Button>
              <Button ></Button>
              <Button >Metaplex</Button> <Button ></Button> <Button >Metaplex</Button> <Button ></Button> <Button >Metaplex</Button> <Button ></Button> <Button >Metaplex</Button>
</div>
                </div>
                </div>
              </div>

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10vw'}}></div>
              

              
              
             </div >
             {/* //CARD START*/}
             <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '40vh', paddingTop:'48px',
              }}> 

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '15vw'}}></div>

              <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '70vw' ,height: '40vh', backgroundColor:'#1f1f1f' ,opacity: 0.95, borderRadius: "10px",padding:'8px', overflow:'hidden'}} > 
              
          
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '45%' ,height: '40vh', backgroundColor:'#0f1012'}} > 
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '350px' ,height: '350px', backgroundColor:'#ffff' , borderRadius: "10px", overflow:'hidden'}}>
                </div>   
                </div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10%' ,height: '40vh', backgroundColor:'#0f1012' ,}} > 
                
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '350px' ,height: '350px', backgroundColor:'#0f1012' , borderRadius: "10px", overflow:'hidden'}}>
                
              <div style={{width:'100%' ,padding:'0px'}} > </div>
                </div>
                </div>    <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '45%' ,height: '40vh', backgroundColor:'#0f1012'}}>
                <div style={{width:'100%' ,padding:'12px'}} ><h1 style={{fontFamily:"Times New Roman" ,fontSize:'36px'}}>Traits</h1>  <div   style={{ paddingTop:'4px'}}>
                  
                  {/* buttton  */}
                  <p> 
                  Each squid's metadata is stored on Arweave, a permanent decentralized data storage.
                   With 100+ possible traits varying in rarity spread over 6 layers, each mint gives you the chance to get a unique, rare squid. 
               
                  </p>
                  <p> 
                  *Rarity does not affect the number of entries for lotto events.
                  </p>
                  </div></div>
               
                </div>
              </div>

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10vw'}}></div>
              
             </div>

                           {/* //CARD END*/}
  {/* //CARD START*/}
  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '40vh', paddingTop:'48px',
              }}> 


              <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '100vw' ,height: '40vh', backgroundColor:'#1f1f1f' ,opacity: 0.95, borderRadius: "10px", overflow:'hidden'}} > 
              
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100%' ,height: '40vh', backgroundColor:'#0f1012'}}>
                <h1 style={{fontFamily:"Times New Roman" ,fontSize:'36px'}}>Roadmap</h1>
              
           

               </div>

              

              </div>
              
             </div>

                           {/* //CARD END*/}


   {/* //CARD START*/}
   <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '40vh', paddingTop:'48px',
              }}> 

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '15vw'}}></div>

              <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '70vw' ,height: '40vh', backgroundColor:'#1f1f1f' ,opacity: 0.95, borderRadius: "10px",padding:'8px', overflow:'hidden'}} > 
              
          
                <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '25%' ,height: '40vh', backgroundColor:'#0f1012' ,}} > 
                
              <div style={{ display: 'flex',  justifyContent:'left', alignItems:'left', width: '350px' ,height: '350px', backgroundColor:'#0f1012' , borderRadius: "10px", overflow:'hidden'}}>
                
              <div style={{width:'100%' ,padding:'0px'}} > <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '100%' ,height: '40vh', backgroundColor:'#0f1012'}}>
                <div style={{width:'100%' ,padding:'12px'}} ><h1 style={{fontFamily:"Times New Roman" ,fontSize:'36px'}}>25% Sold</h1>  <div   style={{ paddingTop:'4px'}}>
                  
                  {/* buttton  */}
                  <p> 
                 After 2500 squids are sold the first OG Squid Lotto will take place. 500 ◎ will be airdropped to 500 squids. You're playing with house money now. 
                  
                  </p>
                  <p> 
                  
                  </p>
                  </div></div>
               
                </div></div>
                </div>
                </div>    <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '25%' ,height: '40vh', backgroundColor:'#0f1012'}}>
                <div style={{width:'100%' ,padding:'12px'}} ><h1 style={{fontFamily:"Times New Roman" ,fontSize:'36px'}}>50% Sold</h1>  <div   style={{ paddingTop:'4px'}}>
                  
                  {/* buttton  */}
                  <p> 
                  After 5000 squids are sold the second OG Squid Lotto will take place. 250 ◎ will be airdropped to 250 squid holders. 
                  
                  </p>
           
                  </div></div>
               
                </div> <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '25%' ,height: '40vh', backgroundColor:'#0f1012'}}>
                <div style={{width:'100%' ,padding:'12px'}} ><h1 style={{fontFamily:"Times New Roman" ,fontSize:'36px'}}>75% Sold</h1>  <div   style={{ paddingTop:'4px'}}>
                  
                  {/* buttton  */}
                  <p> 
                  After 7500 squids are sold the third OG Squid Lotto will take place. 250 ◎ will be airdropped to 250 squid holders. 
                  
                  </p>
                  
                  </div></div>
               
                </div><div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '25%' ,height: '40vh', backgroundColor:'#0f1012'}}>
                <div style={{width:'100%' ,padding:'12px'}} ><h1 style={{fontFamily:"Times New Roman" ,fontSize:'36px'}}>100% Sold</h1>  <div   style={{ paddingTop:'4px'}}>
                  
                  {/* buttton  */}
                  <p> 
                  At this point, 1000 ◎ will have been given out to squid holders, and an estimated ~4000 ◎ will be held in the treasury 
                 
                  </p>... <p> 
                 
                  </p>
                  <p> 
                  Then What?
                  </p>
                  </div></div>
               
                </div>
              </div>

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10vw'}}></div>
              
             </div>

                                 {/* //CARD START*/}
             <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '40vh', paddingTop:'48px',
              }}> 

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '15vw'}}></div>

              <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '70vw' ,height: '40vh', backgroundColor:'#1f1f1f' ,opacity: 0.95, borderRadius: "10px",padding:'8px', overflow:'hidden'}} > 
              
          
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '45%' ,height: '40vh', backgroundColor:'#0f1012'}} > 
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '350px' ,height: '350px', backgroundColor:'#ffff' , borderRadius: "10px", overflow:'hidden'}}>
                </div>   
                </div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10%' ,height: '40vh', backgroundColor:'#0f1012' ,}} > 
                
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '350px' ,height: '350px', backgroundColor:'#0f1012' , borderRadius: "10px", overflow:'hidden'}}>
                
              <div style={{width:'100%' ,padding:'0px'}} > </div>
                </div>
                </div>    <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '45%' ,height: '40vh', backgroundColor:'#0f1012'}}>
                <div style={{width:'100%' ,padding:'4px'}} ><h1 style={{fontFamily:"Times New Roman" ,fontSize:'36px'}}>Royalty Distribution for Degens</h1>  <div   style={{ paddingTop:'4px'}}>
                  
               
                  <p> 
                  50% of all mint and sales profits will be sent to a community wallet/prize pool. 
                  At the end of the year this wallet will be used to fund a holder exclusive draw. 
                  </p>
                  <p> 
                  Luck of the draw: Prize pool will be evenly distributed amongst 10 random squids. 
                  </p>
         
                

                  <p> 
                  (Estimated prize pool after 100% sales and OG lottos: ◎4000)
                  </p>
                  </div></div>
               
                </div>
              </div>

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10vw'}}></div>
              
             </div>








                           {/* //CARD END*/}   
                           {/* //CARD END*/}
                             {/* //CARD START*/}
 

                           {/* //CARD END*/}
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
      </ThemeProvider>
      </Grid>

      <Grid item xs={12} >
      Photo by <a href="https://unsplash.com/@sleepmusic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sleep Music</a> on <a href="https://unsplash.com/s/photos/deep-water?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
    </Grid>

    
</Grid>

  );
};

export default App;
