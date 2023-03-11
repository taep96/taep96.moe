"use client";

import { useEffect } from "react";

export default function EasterEgg() {
  // console log ascii art when page loads
  useEffect(() => {
    console.log(`
    ,,,,,,''',,;;;;;;;:::::::::::ccccccccccc
    ,,...     .',;::::::::::::cccccccccccccc
    '.         ..';:ccclllccc::ccccccccccccc
    .       ..:ldxxOOO0000OOkxo:'...';:ccccc
    .     ..;oOKKKKKKKKKKKKKKKKOdc.   .,cllc
    .    .,,cO00K000OO0KKKKKKKKKKKOc. .;llll
    ,'..,;',x00000OkkxxO00KKKKK0kkO0d;:lllll
    ;;;;,',d00000Oxk00xodk0KK0K00OxxOxccllll
    ;,.  .oO00000OxkkkOdlclk0000O0Odldo:clll
    ,.  .lO00000OkxkkxxkOkl:ldkkkkkkl;o:':ll
    ,.  'x000000Oxc;,;;:cdOdc;:ccllol,ld',cl
    ;.  'ck00OOOOo,..'.,cxOOkxl,.  .;'ckdlll
    ;,',:;:xO0OOOl..'..ckkOOOOk;   ':.:kdlll
    ;;;;:c;,lk00Od;',;cxOkkOkkko'..c:'collll
    ,;,:cccc;;okOxddddxxxxxxxxxxdol:'.':llll
    ;;;co:;c;'';lllllllllllooloolc:,..,lllll
    ,;;:xkc;,',,',,;;;::::;;;;:;;:cc:;lxolll
    ,,;;:l:''............''''..',;;;:loxdlcl
    ,,;,'......',,..''..  .....',:c;;cllllcc   < Hi!
    ,,;,.   .:ccod;.,;.........'cc;;:cclcclc
    `);
  }, []);

  return null;
}
