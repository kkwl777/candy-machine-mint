import "./App.css";
import { useMemo } from "react";

import Home from "./Home";
import Toolbar from "@material-ui/core/Toolbar";
import * as anchor from "@project-serum/anchor";
import Grid from '@material-ui/core/Grid'
import { Button,  } from "@material-ui/core";
import Background from "./background7.png";


import gify from "./1.gif";
import logo from "./LOGO1.png";
import cash from "./cash.png";
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
    <Grid item xs={12}   style={{ backgroundImage: `url(${Background})` , backgroundPosition: 'center', 
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}> 
    

      <ThemeProvider theme={theme}>
        
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect >
            <WalletDialogProvider>
            <Toolbar style={{background:'#000'  ,fontFamily:"Times New Roman" ,fontSize:'60px' ,justifyContent:'right', alignItems:'right',height:'10vh'}}> 
            <div style={{width:'10vw'}}> <img style={{height:'10vh'}}src={logo} alt="loading..." /></div>
            <div style={{width:'80vw' ,fontFamily:"Times New Roman"}}>Project Cthuwu </div>
            <div style={{width:'10vw'}}>
            <Button ><a href="https://discord.gg/mwTg9N8szn" target="_blank" rel="noopener noreferrer">Discord</a></Button>
              <Button ><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></Button> </div> 
             
             
             </Toolbar>


              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh', paddingTop:'90px', paddingBottom:'48px',
              }}> 

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '15vw'}}></div>

              <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '70vw' ,height: '60vh', padding:'8px',backgroundColor:'#1f1f1f' ,opacity: 0.95, borderRadius: "10px", overflow:'hidden'}} > 
              
              <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '45%' ,height: '60vh', backgroundColor:'#0f1012'}}>
                <div style={{width:'100%' ,padding:'24px', paddingLeft:'36px'}} ><h1 style={{fontFamily:"Times New Roman" ,fontSize:'48px', }}>10,000 unique generative Squids on Solana</h1>  <div   style={{ paddingTop:'4px'}}>

                  {/* <p>The Cthuwu Collection consists of 10,00 squids stored on-chain via metaplex candy machine. 
                    Squid holders get access to the exclusive squid community and all giveaways.   </p> */}

                    <p>  1000 squids genesis are available for mint at ◎0.3 ,   
                Genesis mint ◎ will be used to launch the rest of the collection.   </p>

                <p> 
                 Genesis squids will have exclusive traits and holders will be entered into exclusive giveaways for chances to win ◎ and 1/1 NFTs. 
                <p>
                Official mint will be ◎0.5  
                  </p>
                  </p>
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
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '45%' ,height: '60vh', backgroundColor:'#0f1012'}} > 
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '400px' ,height: '400px', backgroundColor:'#0f1012' , borderRadius: "10px", overflow:'hidden'}}>
              <img style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100%' ,height: '100%'}}src={gify} alt="loading..." />
                </div> 
              
                </div>  
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10%' ,height: '60vh', backgroundColor:'#0f1012' ,}} > 
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '350px' ,height: '350px', backgroundColor:'#0f1012' , borderRadius: "10px", overflow:'hidden'}}>
        
              <div style={{width:'100%' ,padding:'0px'}} >              
              <Button >Current Status:</Button>
    
              <Button  >Genesis Mint</Button> 
              <Button  >1000 squids</Button> 
              <Button  >Exclusives:</Button>
              <Button  >Solana bg</Button> 
              <Button  >SoLands bg</Button>  
              <Button  >UpOnly bg</Button> 
</div>
                </div>
                </div>
              </div>

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10vw'}}></div>
              

              
              
             </div >             {/* //CARD START*/}
             <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '40vh', paddingTop:'48px',
              }}> 

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '15vw'}}></div>

              <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '70vw' ,height: '40vh', backgroundColor:'#1f1f1f' ,opacity: 0.95, borderRadius: "10px",padding:'8px', overflow:'hidden'}} > 
              
          
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '45%' ,height: '40vh', backgroundColor:'#0f1012'}} > 
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '350px' ,height: '350px', backgroundColor:'#0f1012' , borderRadius: "10px", overflow:'hidden'}}>
              <img style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100%' ,height: '100%'}}src={exp} alt="loading..." />

                </div>   
                </div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10%' ,height: '40vh', backgroundColor:'#0f1012' ,}} > 
                
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '350px' ,height: '350px', backgroundColor:'#0f1012' , borderRadius: "10px", overflow:'hidden'}}>
                
              <div style={{width:'100%' ,padding:'0px'}} > </div>
                </div>
                </div>    <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '45%' ,height: '40vh', backgroundColor:'#0f1012'}}>
                <div style={{width:'100%' ,padding:'12px'}} ><h1 style={{fontFamily:"Times New Roman" ,fontSize:'36px'}}>Explore SoLands</h1>  <div   style={{ paddingTop:'4px'}}>
                  
                  {/* buttton  */}
                  <p> 
                  Squids are surfacing in different parts of the Solana system. Some have come accross a new frontier. 
                 
             
               
                  </p>
                 
                  <p> 
                    <Button ><h1 style={{fontFamily:"Times New Roman" ,fontSize:'26px'}}>
                  
                  <a href="https://solands.xyz/#/" target="_blank" rel="noopener noreferrer" >SOLANDS.XYZ</a></h1> </Button>
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
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '350px' ,height: '350px', backgroundColor:'#0f1012' , borderRadius: "10px", overflow:'hidden'}}>
              <img style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100%' ,height: '100%'}}src={ecosys} alt="loading..." />

                </div>   
                </div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10%' ,height: '40vh', backgroundColor:'#0f1012' ,}} > 
                
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '350px' ,height: '350px', backgroundColor:'#0f1012' , borderRadius: "10px", overflow:'hidden'}}>
                
              <div style={{width:'100%' ,padding:'0px'}} > </div>
                </div>
                </div>    <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '45%' ,height: '40vh', backgroundColor:'#0f1012'}}>
                <div style={{width:'100%' ,padding:'12px'}} ><h1 style={{fontFamily:"Times New Roman" ,fontSize:'36px'}}>On Chain Traits</h1>  <div   style={{ paddingTop:'4px'}}>
                  
                  {/* buttton  */}
                  <p> 
                  Each squid's metadata is stored on Arweave, a permanent decentralized data storage that is used as the Solana on-chain standard.
                   With 100+ possible traits varying in rarity spread over 6 layers, each mint gives you the chance to get a unique, rare squid. 
             
               
                  </p>
                  <p> 
               
                  </p>
                  <p> 
                  Squids will reside permenantly on Solana. Owners have full commercial rights.
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


              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100vw' ,height: '40vh', backgroundColor:'#1f1f1f' ,opacity: 0.8, borderRadius: "10px", overflow:'hidden'}} > 
              
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100%' ,height: '40vh', backgroundColor:'#0f1012'}}>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '40%' ,height: '40vh', backgroundColor:'#0f1012'}}>
                   <h1 style={{fontFamily:"Times New Roman" ,fontSize:'36px'}}> Win Life Changing SOL </h1>
       </div>
               
           
           

               </div>

              

              </div>
              
             </div>

                           {/* //CARD END*/}



                                 {/* //CARD START*/}
             <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '40vh', paddingTop:'48px',
              }}> 

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '15vw'}}></div>

              <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '70vw' ,height: '45vh', backgroundColor:'#1f1f1f' ,opacity: 0.95, borderRadius: "10px",padding:'8px', overflow:'hidden'}} > 
              
          
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '50%' ,height: '45vh', backgroundColor:'#0f1012'}} > 
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '600px' ,height: '400px', backgroundColor:'#0f1012' , borderRadius: "12px", overflow:'hidden'}}>
              <img style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100%' ,height: '85%',borderRadius: "12px"}}src={cash} alt="loading..." />

                </div>   
                </div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '5%' ,height: '45vh', backgroundColor:'#0f1012' ,}} > 
                
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '400px' ,height: '400px', backgroundColor:'#0f1012' , borderRadius: "10px", overflow:'hidden'}}>
                
              <div style={{width:'100%' ,padding:'0px'}} > </div>
                </div>
                </div>    <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '45%' ,height: '45vh', backgroundColor:'#0f1012'}}>
                <div style={{width:'100%' ,padding:'4px'}} ><h1 style={{fontFamily:"Times New Roman" ,fontSize:'36px'}}> Grand Squid Lotto </h1>  <div   style={{ paddingTop:'4px'}}>
                  
               
                  <p> 
                 
                  10 Winners will split a grand prize pool. 
                  
                

               
                  </p>    <p> 
                  Minimum: ◎100 per winner. To increase over time based on mint % and royalties.
                   
              
                  </p>
                  <p> 
                  The 10 Grand Prize winners will be randomly selected on a livestream to be scheduled after 100% of squids have been minted. 
                  </p>

                  <p> 
                  More events TBA
                  </p>

                <p> 
                  
                 
                  </p>
                  </div></div>
               
                </div>
              </div>

              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10vw'}}></div>
              
             </div>






                           <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh', paddingTop:'90px', paddingBottom:'48px',
              }}> 

            
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '10vw'}}></div>
              

              
              
             </div >
             <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '40vh', paddingTop:'48px',
              }}> 


              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100vw' ,height: '40vh', backgroundColor:'#1f1f1f' ,opacity: 0.8, borderRadius: "10px", overflow:'hidden'}} > 
              
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100%' ,height: '40vh', backgroundColor:'#0f1012'}}>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '40%' ,height: '40vh', backgroundColor:'#0f1012'}}>
                   <h1 style={{fontFamily:"Times New Roman" ,fontSize:'36px'}}> Current Prize Pool: ◎1000 </h1>
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
        What if?
      </ThemeProvider>
      </Grid>

      
    
   

    
</Grid>

  );
};

export default App;
