import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {

  var faction;
  var shipType;
  var choice1;
  var choice2;


  function selectFaction() {  
    var factionList = document.getElementById("factionList");  
    document.getElementById("factionList").value = factionList.options[factionList.selectedIndex].text;  
    faction = factionList.options[factionList.selectedIndex].text; 
    console.log(faction);
  }  

  function selectShip() {  
    var shipTypeList = document.getElementById("shipTypeList"); 
    
    document.getElementById("shipTypeList").value = shipTypeList.options[shipTypeList.selectedIndex].text;  
    
    shipType = shipTypeList.options[shipTypeList.selectedIndex].text; 
    console.log(shipType);
  }  


  ready(() => {
    const button = document.querySelector('#generate');
    button.addEventListener('click', generate);
    button.focus();
    
    const wildcardButton = document.querySelector('#wildcard');
    wildcardButton.addEventListener('click', wildcard);
  });

  // Source: https://simple.wikipedia.org/wiki/List_of_fruits

  // Source: https://en.wikipedia.org/wiki/List_of_culinary_herbs_and_spices


  jsonData = { "members":
    
  [
    {
      "Race": "Arborec",
      "Ship": "War Sun",
      "Part_1": "Flaming",
      "Part_2": "Cactus"
    },
    {
      "Race": "Arborec",
      "Ship": "War Sun",
      "Part_1": "Withering",
      "Part_2": "Darkness"
    },
    {
      "Race": "Arborec",
      "Ship": "War Sun",
      "Part_1": "Everlasting",
      "Part_2": "Fruit"
    },
    {
      "Race": "Arborec",
      "Ship": "Dreadnought",
      "Part_1": "Blossoming",
      "Part_2": "Root"
    },
    {
      "Race": "Arborec",
      "Ship": "Dreadnought",
      "Part_1": "Thorned",
      "Part_2": "Branch"
    },
    {
      "Race": "Arborec",
      "Ship": "Dreadnought",
      "Part_1": "Symphonic",
      "Part_2": "Blade"
    },
    {
      "Race": "Arborec",
      "Ship": "Dreadnought",
      "Part_1": "Rhizomatic",
      "Part_2": "Twig"
    },
    {
      "Race": "Arborec",
      "Ship": "Cruiser",
      "Part_1": "Green",
      "Part_2": "Petal"
    },
    {
      "Race": "Arborec",
      "Ship": "Cruiser",
      "Part_1": "Indigestible",
      "Part_2": "Mold"
    },
    {
      "Race": "Arborec",
      "Ship": "Cruiser",
      "Part_1": "Penetrating",
      "Part_2": "Seed"
    },
    {
      "Race": "Arborec",
      "Ship": "Cruiser",
      "Part_1": "Falling",
      "Part_2": "Acorn"
    },
    {
      "Race": "Arborec",
      "Ship": "Cruiser",
      "Part_1": "Seeking",
      "Part_2": "Berry"
    },
    {
      "Race": "Barony of Letnev",
      "Ship": "War Sun",
      "Part_1": "Terminus",
      "Part_2": "Est"
    },
    {
      "Race": "Barony of Letnev",
      "Ship": "War Sun",
      "Part_1": "Interitus",
      "Part_2": "Nova"
    },
    {
      "Race": "Barony of Letnev",
      "Ship": "War Sun",
      "Part_1": "Annihilatio",
      "Part_2": "Prima"
    },
    {
      "Race": "Barony of Letnev",
      "Ship": "Dreadnought",
      "Part_1": "Ad",
      "Part_2": "Aeternum"
    },
    {
      "Race": "Barony of Letnev",
      "Ship": "Dreadnought",
      "Part_1": "Alere",
      "Part_2": "Gloriam"
    },
    {
      "Race": "Barony of Letnev",
      "Ship": "Dreadnought",
      "Part_1": "Regina",
      "Part_2": "Flammam"
    },
    {
      "Race": "Barony of Letnev",
      "Ship": "Dreadnought",
      "Part_1": "Exaltate",
      "Part_2": "Purgandum"
    },
    {
      "Race": "Barony of Letnev",
      "Ship": "Cruiser",
      "Part_1": "Feruc",
      "Part_2": "Rex"
    },
    {
      "Race": "Barony of Letnev",
      "Ship": "Cruiser",
      "Part_1": "Ao",
      "Part_2": "Prorex"
    },
    {
      "Race": "Barony of Letnev",
      "Ship": "Cruiser",
      "Part_1": "Goz",
      "Part_2": "Dux"
    },
    {
      "Race": "Barony of Letnev",
      "Ship": "Cruiser",
      "Part_1": "Wren",
      "Part_2": "Marchio"
    },
    {
      "Race": "Barony of Letnev",
      "Ship": "Cruiser",
      "Part_1": "Werqan",
      "Part_2": "Princeps"
    },
    {
      "Race": "The Clan of Saar",
      "Ship": "War Sun",
      "Part_1": "Vermilion",
      "Part_2": "Daughter"
    },
    {
      "Race": "The Clan of Saar",
      "Ship": "War Sun",
      "Part_1": "Mournful",
      "Part_2": "Drop"
    },
    {
      "Race": "The Clan of Saar",
      "Ship": "War Sun",
      "Part_1": "Roaming",
      "Part_2": "Bringer of Rust"
    },
    {
      "Race": "The Clan of Saar",
      "Ship": "Dreadnought",
      "Part_1": "Hidden",
      "Part_2": "Exhalation"
    },
    {
      "Race": "The Clan of Saar",
      "Ship": "Dreadnought",
      "Part_1": "Unspoken",
      "Part_2": "Howl"
    },
    {
      "Race": "The Clan of Saar",
      "Ship": "Dreadnought",
      "Part_1": "Vengeful",
      "Part_2": "Sarrig"
    },
    {
      "Race": "The Clan of Saar",
      "Ship": "Dreadnought",
      "Part_1": "Summoning",
      "Part_2": "Aggero"
    },
    {
      "Race": "The Clan of Saar",
      "Ship": "Cruiser",
      "Part_1": "Biting",
      "Part_2": "Claw"
    },
    {
      "Race": "The Clan of Saar",
      "Ship": "Cruiser",
      "Part_1": "Tearing",
      "Part_2": "Fist"
    },
    {
      "Race": "The Clan of Saar",
      "Ship": "Cruiser",
      "Part_1": "Cloaked",
      "Part_2": "Bite"
    },
    {
      "Race": "The Clan of Saar",
      "Ship": "Cruiser",
      "Part_1": "Leaping",
      "Part_2": "Slash"
    },
    {
      "Race": "The Clan of Saar",
      "Ship": "Cruiser",
      "Part_1": "Stinking",
      "Part_2": "Maw"
    },
    {
      "Race": "Embers of Muaat",
      "Ship": "War Sun",
      "Part_1": "Infernal",
      "Part_2": "Ashbringer"
    },
    {
      "Race": "Embers of Muaat",
      "Ship": "War Sun",
      "Part_1": "Molten",
      "Part_2": "Godhead"
    },
    {
      "Race": "Embers of Muaat",
      "Ship": "War Sun",
      "Part_1": "Righteous",
      "Part_2": "Warden"
    },
    {
      "Race": "Embers of Muaat",
      "Ship": "Dreadnought",
      "Part_1": "Flowing",
      "Part_2": "Magma"
    },
    {
      "Race": "Embers of Muaat",
      "Ship": "Dreadnought",
      "Part_1": "Relentless",
      "Part_2": "Volcano"
    },
    {
      "Race": "Embers of Muaat",
      "Ship": "Dreadnought",
      "Part_1": "Perennial",
      "Part_2": "Core"
    },
    {
      "Race": "Embers of Muaat",
      "Ship": "Dreadnought",
      "Part_1": "Embracing",
      "Part_2": "Candle"
    },
    {
      "Race": "Embers of Muaat",
      "Ship": "Cruiser",
      "Part_1": "Gentle",
      "Part_2": "Tinder"
    },
    {
      "Race": "Embers of Muaat",
      "Ship": "Cruiser",
      "Part_1": "Tender",
      "Part_2": "Blaze"
    },
    {
      "Race": "Embers of Muaat",
      "Ship": "Cruiser",
      "Part_1": "Whispering",
      "Part_2": "Discharge"
    },
    {
      "Race": "Embers of Muaat",
      "Ship": "Cruiser",
      "Part_1": "Soothing",
      "Part_2": "Plume"
    },
    {
      "Race": "Embers of Muaat",
      "Ship": "Cruiser",
      "Part_1": "Cleansing",
      "Part_2": "Spark"
    },
    {
      "Race": "Emirates of Hacan",
      "Ship": "War Sun",
      "Part_1": "Undying",
      "Part_2": "Crown"
    },
    {
      "Race": "Emirates of Hacan",
      "Ship": "War Sun",
      "Part_1": "Unyielding",
      "Part_2": "Roar"
    },
    {
      "Race": "Emirates of Hacan",
      "Ship": "War Sun",
      "Part_1": "Diamond",
      "Part_2": "Embrace"
    },
    {
      "Race": "Emirates of Hacan",
      "Ship": "Dreadnought",
      "Part_1": "Illustrious",
      "Part_2": "Amethyst"
    },
    {
      "Race": "Emirates of Hacan",
      "Ship": "Dreadnought",
      "Part_1": "Simmering",
      "Part_2": "Emerald"
    },
    {
      "Race": "Emirates of Hacan",
      "Ship": "Dreadnought",
      "Part_1": "Intriguing",
      "Part_2": "Topaz"
    },
    {
      "Race": "Emirates of Hacan",
      "Ship": "Dreadnought",
      "Part_1": "Lustrous",
      "Part_2": "Sunstone"
    },
    {
      "Race": "Emirates of Hacan",
      "Ship": "Cruiser",
      "Part_1": "Sparkling",
      "Part_2": "Beast"
    },
    {
      "Race": "Emirates of Hacan",
      "Ship": "Cruiser",
      "Part_1": "Charming",
      "Part_2": "Persuader"
    },
    {
      "Race": "Emirates of Hacan",
      "Ship": "Cruiser",
      "Part_1": "Precious",
      "Part_2": "Snarl"
    },
    {
      "Race": "Emirates of Hacan",
      "Ship": "Cruiser",
      "Part_1": "Magnificent",
      "Part_2": "Fleece"
    },
    {
      "Race": "Emirates of Hacan",
      "Ship": "Cruiser",
      "Part_1": "Golden",
      "Part_2": "Medallion"
    },
    {
      "Race": "Federation of Sol",
      "Ship": "War Sun",
      "Part_1": "Mighty",
      "Part_2": "Vainamoinen"
    },
    {
      "Race": "Federation of Sol",
      "Ship": "War Sun",
      "Part_1": "Old",
      "Part_2": "Zeus"
    },
    {
      "Race": "Federation of Sol",
      "Ship": "War Sun",
      "Part_1": "Little",
      "Part_2": "Odin"
    },
    {
      "Race": "Federation of Sol",
      "Ship": "Dreadnought",
      "Part_1": "USS",
      "Part_2": "Quantitative Easing"
    },
    {
      "Race": "Federation of Sol",
      "Ship": "Dreadnought",
      "Part_1": "SRS",
      "Part_2": "Stimulus Package"
    },
    {
      "Race": "Federation of Sol",
      "Ship": "Dreadnought",
      "Part_1": "ASS",
      "Part_2": "Cowabunga"
    },
    {
      "Race": "Federation of Sol",
      "Ship": "Dreadnought",
      "Part_1": "SSS",
      "Part_2": "Business Time"
    },
    {
      "Race": "Federation of Sol",
      "Ship": "Cruiser",
      "Part_1": "Tik Tok",
      "Part_2": "Love Boat"
    },
    {
      "Race": "Federation of Sol",
      "Ship": "Cruiser",
      "Part_1": "Gamestop",
      "Part_2": "Enterprise"
    },
    {
      "Race": "Federation of Sol",
      "Ship": "Cruiser",
      "Part_1": "Baidu",
      "Part_2": "Explorer"
    },
    {
      "Race": "Federation of Sol",
      "Ship": "Cruiser",
      "Part_1": "Pepsicola",
      "Part_2": "Essay"
    },
    {
      "Race": "Federation of Sol",
      "Ship": "Cruiser",
      "Part_1": "Adidas",
      "Part_2": "Venture"
    },
    {
      "Race": "Ghosts of Creuss",
      "Ship": "War Sun",
      "Part_1": "Ineffable",
      "Part_2": "Light"
    },
    {
      "Race": "Ghosts of Creuss",
      "Ship": "War Sun",
      "Part_1": "Most Delicate",
      "Part_2": "Shadow"
    },
    {
      "Race": "Ghosts of Creuss",
      "Ship": "War Sun",
      "Part_1": "Well-Considered",
      "Part_2": "Riftmaker"
    },
    {
      "Race": "Ghosts of Creuss",
      "Ship": "Dreadnought",
      "Part_1": "Tripartite",
      "Part_2": "Wraith"
    },
    {
      "Race": "Ghosts of Creuss",
      "Ship": "Dreadnought",
      "Part_1": "Dissipating",
      "Part_2": "Banshee"
    },
    {
      "Race": "Ghosts of Creuss",
      "Ship": "Dreadnought",
      "Part_1": "Pitiless",
      "Part_2": "Spirit"
    },
    {
      "Race": "Ghosts of Creuss",
      "Ship": "Dreadnought",
      "Part_1": "Fulgent",
      "Part_2": "Soul"
    },
    {
      "Race": "Ghosts of Creuss",
      "Ship": "Cruiser",
      "Part_1": "Silver",
      "Part_2": "Plenipotentiary"
    },
    {
      "Race": "Ghosts of Creuss",
      "Ship": "Cruiser",
      "Part_1": "Covalent",
      "Part_2": "Emissary"
    },
    {
      "Race": "Ghosts of Creuss",
      "Ship": "Cruiser",
      "Part_1": "Supersymmetric",
      "Part_2": "Consul"
    },
    {
      "Race": "Ghosts of Creuss",
      "Ship": "Cruiser",
      "Part_1": "Amplituhedric",
      "Part_2": "Ambassador"
    },
    {
      "Race": "Ghosts of Creuss",
      "Ship": "Cruiser",
      "Part_1": "Quantum",
      "Part_2": "Envoy"
    },
    {
      "Race": "L1Z1X Mindnet",
      "Ship": "War Sun",
      "Part_1": "Terminating",
      "Part_2": "Deletion"
    },
    {
      "Race": "L1Z1X Mindnet",
      "Ship": "War Sun",
      "Part_1": "Purging",
      "Part_2": "Cleanse"
    },
    {
      "Race": "L1Z1X Mindnet",
      "Ship": "War Sun",
      "Part_1": "Error",
      "Part_2": "Reset"
    },
    {
      "Race": "L1Z1X Mindnet",
      "Ship": "Dreadnought",
      "Part_1": "Binary",
      "Part_2": "Recursion"
    },
    {
      "Race": "L1Z1X Mindnet",
      "Ship": "Dreadnought",
      "Part_1": "Proofing",
      "Part_2": "Algorithm"
    },
    {
      "Race": "L1Z1X Mindnet",
      "Ship": "Dreadnought",
      "Part_1": "Ternary",
      "Part_2": "Graph"
    },
    {
      "Race": "L1Z1X Mindnet",
      "Ship": "Dreadnought",
      "Part_1": "Compiling",
      "Part_2": "Randomizer"
    },
    {
      "Race": "L1Z1X Mindnet",
      "Ship": "Cruiser",
      "Part_1": "4.7.",
      "Part_2": 1
    },
    {
      "Race": "L1Z1X Mindnet",
      "Ship": "Cruiser",
      "Part_1": "5.6.",
      "Part_2": 2
    },
    {
      "Race": "L1Z1X Mindnet",
      "Ship": "Cruiser",
      "Part_1": "2.4.",
      "Part_2": 3
    },
    {
      "Race": "L1Z1X Mindnet",
      "Ship": "Cruiser",
      "Part_1": "3.3.",
      "Part_2": 4
    },
    {
      "Race": "L1Z1X Mindnet",
      "Ship": "Cruiser",
      "Part_1": "8.1.",
      "Part_2": 5
    },
    {
      "Race": "Mentak Coalition",
      "Ship": "War Sun",
      "Part_1": "Unchained",
      "Part_2": "Haven"
    },
    {
      "Race": "Mentak Coalition",
      "Ship": "War Sun",
      "Part_1": "Pirate",
      "Part_2": "Uprising"
    },
    {
      "Race": "Mentak Coalition",
      "Ship": "War Sun",
      "Part_1": "Final",
      "Part_2": "Freedom"
    },
    {
      "Race": "Mentak Coalition",
      "Ship": "Dreadnought",
      "Part_1": "Violet",
      "Part_2": "Saber"
    },
    {
      "Race": "Mentak Coalition",
      "Ship": "Dreadnought",
      "Part_1": "Crimson",
      "Part_2": "Cannon"
    },
    {
      "Race": "Mentak Coalition",
      "Ship": "Dreadnought",
      "Part_1": "Scarlet",
      "Part_2": "Harpoon"
    },
    {
      "Race": "Mentak Coalition",
      "Ship": "Dreadnought",
      "Part_1": "Ruby",
      "Part_2": "Rejoinder"
    },
    {
      "Race": "Mentak Coalition",
      "Ship": "Cruiser",
      "Part_1": "Tomato-Red",
      "Part_2": "Peregrine"
    },
    {
      "Race": "Mentak Coalition",
      "Ship": "Cruiser",
      "Part_1": "Whistling",
      "Part_2": "Sparrow"
    },
    {
      "Race": "Mentak Coalition",
      "Ship": "Cruiser",
      "Part_1": "Blue",
      "Part_2": "Nightcrawler"
    },
    {
      "Race": "Mentak Coalition",
      "Ship": "Cruiser",
      "Part_1": "Prancing",
      "Part_2": "Shade"
    },
    {
      "Race": "Mentak Coalition",
      "Ship": "Cruiser",
      "Part_1": "Slick",
      "Part_2": "Shadow"
    },
    {
      "Race": "Naalu Collective",
      "Ship": "War Sun",
      "Part_1": "Enrapturing",
      "Part_2": "Hive"
    },
    {
      "Race": "Naalu Collective",
      "Ship": "War Sun",
      "Part_1": "Crystal",
      "Part_2": "Paradise of Love"
    },
    {
      "Race": "Naalu Collective",
      "Ship": "War Sun",
      "Part_1": "All-Knowing",
      "Part_2": "Moon"
    },
    {
      "Race": "Naalu Collective",
      "Ship": "Dreadnought",
      "Part_1": "Pristine",
      "Part_2": "Serpent"
    },
    {
      "Race": "Naalu Collective",
      "Ship": "Dreadnought",
      "Part_1": "Coiled",
      "Part_2": "Viper"
    },
    {
      "Race": "Naalu Collective",
      "Ship": "Dreadnought",
      "Part_1": "Thousand-Scaled",
      "Part_2": "Cobra"
    },
    {
      "Race": "Naalu Collective",
      "Ship": "Dreadnought",
      "Part_1": "Iridescent",
      "Part_2": "Python"
    },
    {
      "Race": "Naalu Collective",
      "Ship": "Cruiser",
      "Part_1": "Velvet",
      "Part_2": "Tail"
    },
    {
      "Race": "Naalu Collective",
      "Ship": "Cruiser",
      "Part_1": "Perfumed",
      "Part_2": "Bite"
    },
    {
      "Race": "Naalu Collective",
      "Ship": "Cruiser",
      "Part_1": "Posed",
      "Part_2": "Venom"
    },
    {
      "Race": "Naalu Collective",
      "Ship": "Cruiser",
      "Part_1": "Resplendent",
      "Part_2": "Kiss"
    },
    {
      "Race": "Naalu Collective",
      "Ship": "Cruiser",
      "Part_1": "Fantastic",
      "Part_2": "Dance"
    },
    {
      "Race": "Nekro Virus",
      "Ship": "War Sun",
      "Part_1": "01000110",
      "Part_2": "01010101"
    },
    {
      "Race": "Nekro Virus",
      "Ship": "War Sun",
      "Part_1": "01010101",
      "Part_2": "01010011"
    },
    {
      "Race": "Nekro Virus",
      "Ship": "War Sun",
      "Part_1": "01010100",
      "Part_2": "01010100"
    },
    {
      "Race": "Nekro Virus",
      "Ship": "Dreadnought",
      "Part_1": "Mordai",
      "Part_2": "::Error::"
    },
    {
      "Race": "Nekro Virus",
      "Ship": "Dreadnought",
      "Part_1": "Retro",
      "Part_2": 11111
    },
    {
      "Race": "Nekro Virus",
      "Ship": "Dreadnought",
      "Part_1": "Defiler",
      "Part_2": "Noctis"
    },
    {
      "Race": "Nekro Virus",
      "Ship": "Dreadnought",
      "Part_1": "Replicate",
      "Part_2": "Replicate"
    },
    {
      "Race": "Nekro Virus",
      "Ship": "Cruiser",
      "Part_1": 111,
      "Part_2": "001"
    },
    {
      "Race": "Nekro Virus",
      "Ship": "Cruiser",
      "Part_1": 101,
      "Part_2": 101
    },
    {
      "Race": "Nekro Virus",
      "Ship": "Cruiser",
      "Part_1": "011",
      "Part_2": "010"
    },
    {
      "Race": "Nekro Virus",
      "Ship": "Cruiser",
      "Part_1": "001",
      "Part_2": "001"
    },
    {
      "Race": "Nekro Virus",
      "Ship": "Cruiser",
      "Part_1": 100,
      "Part_2": 111
    },
    {
      "Race": "Sardakk N’Orr",
      "Ship": "War Sun",
      "Part_1": "T’Hom",
      "Part_2": "Barr"
    },
    {
      "Race": "Sardakk N’Orr",
      "Ship": "War Sun",
      "Part_1": "V’Dsst",
      "Part_2": "H’Cor"
    },
    {
      "Race": "Sardakk N’Orr",
      "Ship": "War Sun",
      "Part_1": "Tdzk",
      "Part_2": "P’Narr"
    },
    {
      "Race": "Sardakk N’Orr",
      "Ship": "Dreadnought",
      "Part_1": "C’Terrak",
      "Part_2": "Tekklar"
    },
    {
      "Race": "Sardakk N’Orr",
      "Ship": "Dreadnought",
      "Part_1": "Frakk",
      "Part_2": "M’Narr"
    },
    {
      "Race": "Sardakk N’Orr",
      "Ship": "Dreadnought",
      "Part_1": "B’zash",
      "Part_2": "G’Noh"
    },
    {
      "Race": "Sardakk N’Orr",
      "Ship": "Dreadnought",
      "Part_1": "T’Fikk",
      "Part_2": "Dakk"
    },
    {
      "Race": "Sardakk N’Orr",
      "Ship": "Cruiser",
      "Part_1": "V’Lurr",
      "Part_2": "Ripsakk"
    },
    {
      "Race": "Sardakk N’Orr",
      "Ship": "Cruiser",
      "Part_1": "P’Turr",
      "Part_2": "V’Renn"
    },
    {
      "Race": "Sardakk N’Orr",
      "Ship": "Cruiser",
      "Part_1": "D’Prash",
      "Part_2": "T’Klikk"
    },
    {
      "Race": "Sardakk N’Orr",
      "Ship": "Cruiser",
      "Part_1": "V’Ziddikk",
      "Part_2": "S’Sarnoss"
    },
    {
      "Race": "Sardakk N’Orr",
      "Ship": "Cruiser",
      "Part_1": "G’Hon",
      "Part_2": "B’Dsh"
    },
    {
      "Race": "Universities of Jol-Nar",
      "Ship": "War Sun",
      "Part_1": "J.N.W",
      "Part_2": "Theorem"
    },
    {
      "Race": "Universities of Jol-Nar",
      "Ship": "War Sun",
      "Part_1": "J.N.W",
      "Part_2": "Particle"
    },
    {
      "Race": "Universities of Jol-Nar",
      "Ship": "War Sun",
      "Part_1": "J.N.W",
      "Part_2": "Headmaster"
    },
    {
      "Race": "Universities of Jol-Nar",
      "Ship": "Dreadnought",
      "Part_1": "J.N.S",
      "Part_2": "Educator"
    },
    {
      "Race": "Universities of Jol-Nar",
      "Ship": "Dreadnought",
      "Part_1": "J.N.S",
      "Part_2": "Compass"
    },
    {
      "Race": "Universities of Jol-Nar",
      "Ship": "Dreadnought",
      "Part_1": "J.N.S",
      "Part_2": "Catalyst"
    },
    {
      "Race": "Universities of Jol-Nar",
      "Ship": "Dreadnought",
      "Part_1": "J.N.S",
      "Part_2": "Reactant"
    },
    {
      "Race": "Universities of Jol-Nar",
      "Ship": "Cruiser",
      "Part_1": "J.N.S",
      "Part_2": "Question"
    },
    {
      "Race": "Universities of Jol-Nar",
      "Ship": "Cruiser",
      "Part_1": "J.N.S",
      "Part_2": "Citation Needed"
    },
    {
      "Race": "Universities of Jol-Nar",
      "Ship": "Cruiser",
      "Part_1": "J.N.S",
      "Part_2": "Publication"
    },
    {
      "Race": "Universities of Jol-Nar",
      "Ship": "Cruiser",
      "Part_1": "J.N.S",
      "Part_2": "Homework"
    },
    {
      "Race": "Universities of Jol-Nar",
      "Ship": "Cruiser",
      "Part_1": "J.N.S",
      "Part_2": "Lesson"
    },
    {
      "Race": "Winnu",
      "Ship": "War Sun",
      "Part_1": "Final",
      "Part_2": "Upholder of Tradition"
    },
    {
      "Race": "Winnu",
      "Ship": "War Sun",
      "Part_1": "Hallowed",
      "Part_2": "Golden Legend"
    },
    {
      "Race": "Winnu",
      "Ship": "War Sun",
      "Part_1": "Sunlit",
      "Part_2": "Counsel"
    },
    {
      "Race": "Winnu",
      "Ship": "Dreadnought",
      "Part_1": "Relentless",
      "Part_2": "Honour"
    },
    {
      "Race": "Winnu",
      "Ship": "Dreadnought",
      "Part_1": "Proper",
      "Part_2": "Scourge"
    },
    {
      "Race": "Winnu",
      "Ship": "Dreadnought",
      "Part_1": "Eternal",
      "Part_2": "Memory"
    },
    {
      "Race": "Winnu",
      "Ship": "Dreadnought",
      "Part_1": "Imperial",
      "Part_2": "Rule"
    },
    {
      "Race": "Winnu",
      "Ship": "Cruiser",
      "Part_1": "Righteous",
      "Part_2": "Missive"
    },
    {
      "Race": "Winnu",
      "Ship": "Cruiser",
      "Part_1": "Inviolable",
      "Part_2": "Declaration"
    },
    {
      "Race": "Winnu",
      "Ship": "Cruiser",
      "Part_1": "Thrice-Sealed",
      "Part_2": "Flame"
    },
    {
      "Race": "Winnu",
      "Ship": "Cruiser",
      "Part_1": "Thousand-Year",
      "Part_2": "Retribution"
    },
    {
      "Race": "Winnu",
      "Ship": "Cruiser",
      "Part_1": "Palatine",
      "Part_2": "Orthodoxy"
    },
    {
      "Race": "Xxcha Kingdom",
      "Ship": "War Sun",
      "Part_1": "Ultimate",
      "Part_2": "Bastion"
    },
    {
      "Race": "Xxcha Kingdom",
      "Ship": "War Sun",
      "Part_1": "Warding",
      "Part_2": "Dream of Elders"
    },
    {
      "Race": "Xxcha Kingdom",
      "Ship": "War Sun",
      "Part_1": "Sheltering",
      "Part_2": "Tragedy"
    },
    {
      "Race": "Xxcha Kingdom",
      "Ship": "Dreadnought",
      "Part_1": "Reminder of",
      "Part_2": "Peace"
    },
    {
      "Race": "Xxcha Kingdom",
      "Ship": "Dreadnought",
      "Part_1": "Welcomer of",
      "Part_2": "Harmony"
    },
    {
      "Race": "Xxcha Kingdom",
      "Ship": "Dreadnought",
      "Part_1": "Builder of",
      "Part_2": "Cooperation"
    },
    {
      "Race": "Xxcha Kingdom",
      "Ship": "Dreadnought",
      "Part_1": "Celebration of",
      "Part_2": "Conciliation"
    },
    {
      "Race": "Xxcha Kingdom",
      "Ship": "Cruiser",
      "Part_1": "Nimble",
      "Part_2": "Flower"
    },
    {
      "Race": "Xxcha Kingdom",
      "Ship": "Cruiser",
      "Part_1": "Kind",
      "Part_2": "Egg"
    },
    {
      "Race": "Xxcha Kingdom",
      "Ship": "Cruiser",
      "Part_1": "Respectful",
      "Part_2": "Protector"
    },
    {
      "Race": "Xxcha Kingdom",
      "Ship": "Cruiser",
      "Part_1": "Unbowing",
      "Part_2": "Defender"
    },
    {
      "Race": "Xxcha Kingdom",
      "Ship": "Cruiser",
      "Part_1": "Formidable",
      "Part_2": "Shield"
    },
    {
      "Race": "Yin Brotherhood",
      "Ship": "War Sun",
      "Part_1": "Eschatonic",
      "Part_2": "Covenant"
    },
    {
      "Race": "Yin Brotherhood",
      "Ship": "War Sun",
      "Part_1": "Sacred Fraternal",
      "Part_2": "Kenosis"
    },
    {
      "Race": "Yin Brotherhood",
      "Ship": "War Sun",
      "Part_1": "Ever-Mirrored",
      "Part_2": "Theophany"
    },
    {
      "Race": "Yin Brotherhood",
      "Ship": "Dreadnought",
      "Part_1": "Holy",
      "Part_2": "Hammer"
    },
    {
      "Race": "Yin Brotherhood",
      "Ship": "Dreadnought",
      "Part_1": "Blessed",
      "Part_2": "Knife"
    },
    {
      "Race": "Yin Brotherhood",
      "Ship": "Dreadnought",
      "Part_1": "Anointed",
      "Part_2": "Blade"
    },
    {
      "Race": "Yin Brotherhood",
      "Ship": "Dreadnought",
      "Part_1": "Consecrated",
      "Part_2": "Excision"
    },
    {
      "Race": "Yin Brotherhood",
      "Ship": "Cruiser",
      "Part_1": "Exalted",
      "Part_2": "Herald of Brotherhood"
    },
    {
      "Race": "Yin Brotherhood",
      "Ship": "Cruiser",
      "Part_1": "Sanctified",
      "Part_2": "Emissary of Union"
    },
    {
      "Race": "Yin Brotherhood",
      "Ship": "Cruiser",
      "Part_1": "Wonderful",
      "Part_2": "Truth"
    },
    {
      "Race": "Yin Brotherhood",
      "Ship": "Cruiser",
      "Part_1": "Untouched",
      "Part_2": "Unction"
    },
    {
      "Race": "Yin Brotherhood",
      "Ship": "Cruiser",
      "Part_1": "Godly",
      "Part_2": "Sojourner"
    },
    {
      "Race": "Yssaril Tribes",
      "Ship": "War Sun",
      "Part_1": "Might of the",
      "Part_2": "Thousand Shrieking Voices"
    },
    {
      "Race": "Yssaril Tribes",
      "Ship": "War Sun",
      "Part_1": "Glory of the",
      "Part_2": "United Tribes"
    },
    {
      "Race": "Yssaril Tribes",
      "Ship": "War Sun",
      "Part_1": "Dagger of the",
      "Part_2": "Hidden Truth"
    },
    {
      "Race": "Yssaril Tribes",
      "Ship": "Dreadnought",
      "Part_1": "Fearsome",
      "Part_2": "Silencer"
    },
    {
      "Race": "Yssaril Tribes",
      "Ship": "Dreadnought",
      "Part_1": "Mighty",
      "Part_2": "Informant"
    },
    {
      "Race": "Yssaril Tribes",
      "Ship": "Dreadnought",
      "Part_1": "Fierce",
      "Part_2": "Green Shaft"
    },
    {
      "Race": "Yssaril Tribes",
      "Ship": "Dreadnought",
      "Part_1": "Formidable",
      "Part_2": "Journeyman"
    },
    {
      "Race": "Yssaril Tribes",
      "Ship": "Cruiser",
      "Part_1": "Eyeless",
      "Part_2": "Investigator"
    },
    {
      "Race": "Yssaril Tribes",
      "Ship": "Cruiser",
      "Part_1": "Handless",
      "Part_2": "Listener"
    },
    {
      "Race": "Yssaril Tribes",
      "Ship": "Cruiser",
      "Part_1": "Noseless",
      "Part_2": "Observer"
    },
    {
      "Race": "Yssaril Tribes",
      "Ship": "Cruiser",
      "Part_1": "Earless",
      "Part_2": "Seeker"
    },
    {
      "Race": "Yssaril Tribes",
      "Ship": "Cruiser",
      "Part_1": "Mouthless",
      "Part_2": "Watcher"
    },
    {
      "Race": "Generic",
      "Ship": "War Sun",
      "Part_1": "Joyous",
      "Part_2": "Hammer"
    },
    {
      "Race": "Generic",
      "Ship": "War Sun",
      "Part_1": "Valiant",
      "Part_2": "Javelin"
    },
    {
      "Race": "Generic",
      "Ship": "War Sun",
      "Part_1": "Rigorous",
      "Part_2": "Mallet"
    },
    {
      "Race": "Generic",
      "Ship": "Dreadnought",
      "Part_1": "SS",
      "Part_2": "Vessel"
    },
    {
      "Race": "Generic",
      "Ship": "Dreadnought",
      "Part_1": "Stormy",
      "Part_2": "Flower"
    },
    {
      "Race": "Generic",
      "Ship": "Dreadnought",
      "Part_1": "Unsinkable",
      "Part_2": "Striker"
    },
    {
      "Race": "Generic",
      "Ship": "Dreadnought",
      "Part_1": "Tickling",
      "Part_2": "Fist"
    },
    {
      "Race": "Generic",
      "Ship": "Cruiser",
      "Part_1": "Dreaming",
      "Part_2": "Mace"
    },
    {
      "Race": "Generic",
      "Ship": "Cruiser",
      "Part_1": "Galactic",
      "Part_2": "Halberd"
    },
    {
      "Race": "Generic",
      "Ship": "Cruiser",
      "Part_1": "Lightspeed",
      "Part_2": "Cannon"
    },
    {
      "Race": "Generic",
      "Ship": "Cruiser",
      "Part_1": "Very Strong",
      "Part_2": "Ravager"
    },
    {
      "Race": "Generic",
      "Ship": "Cruiser",
      "Part_1": "Dancing",
      "Part_2": "Peace-bringer"
    }
  ]
  }
  function generate() {
    document.querySelector('#user-warning').innerHTML = "";

    console.log("Options");
    console.log(faction);
    console.log(shipType);
    // Filter by faction
    var options = jsonData.members.filter(item => item.Race === faction);
    // Filter by ship type
    if(shipType != '---Choose Ship Type---')
    {
      try {
        options = options.filter(item => item.Ship == shipType);
      }
      catch {
        console.log("No ship type selected");
      }
    }
    console.log("No ship selected");
    // If both faction and ship type have been selected
    try {
      
      var newChoice1 = Math.floor(Math.random()*options.length);
      while (newChoice1 == choice1)
      {
        newChoice1 = Math.floor(Math.random()*options.length);
      }
      choice1 = newChoice1
      var newChoice2 = Math.floor(Math.random()*options.length);
      while (newChoice2 == choice2)
      {
        newChoice2 = Math.floor(Math.random()*options.length);
      }
      choice2 = newChoice2

      console.log("Choices")
      console.log(choice1);
      console.log(choice2);

    firstPart = options[choice1].Part_1;
    secondPart = options[choice2].Part_2;
    console.log(firstPart + " " + secondPart);
    } 
    catch (e) {
        console.log("Error no ship");
        document.querySelector('#user-warning').innerHTML = "Select a ship type and faction, or use the Wildcard";
      return; 
  
    }
    
    var name = "";
    if (firstPart != null)
      {
        if (faction === 'L1Z1X Mindnet' && shipType === 'Cruiser') {
        name = firstPart + secondPart
        } else 
          {
            name = "The " + firstPart + " " + secondPart

          }
      } 
    
    document.querySelector('#name').innerHTML = name;
    document.querySelector('#generate').focus();

  }

  function wildcard() {
    // Exclude the L1Z1X and Nekro Virus
    var options = jsonData.members.filter(item => item.Race != "L1Z1X Mindnet");
    options = options.filter(item => item.Race != "Nekro Virus");
    
    var newChoice1 = Math.floor(Math.random()*options.length);
    while (newChoice1 == choice1)
    {
      newChoice1 = Math.floor(Math.random()*options.length);
    }
    choice1 = newChoice1
    var newChoice2 = Math.floor(Math.random()*options.length);
    while (newChoice2 == choice2)
    {
      newChoice2 = Math.floor(Math.random()*options.length);
    }
    choice2 = newChoice2
    
    console.log("Choices")
    console.log(choice1);
    console.log(choice2);
    
    firstPart = options[choice1].Part_1;
    secondPart = options[choice2].Part_2;
  var name = "";
    if (firstPart != null)
      {
        name = "The " + firstPart + " " + secondPart
      }
    
    document.querySelector('#name').innerHTML = name;
    document.querySelector('#generate').focus();
  }
  function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  /*!
    The following license applies to the camelize code below:
    Copyright (c) 2018 Yehuda Katz, Tom Dale and Ember.js contributors

  Permission is hereby granted, free of charge, to any person obtaining a copy of
  this software and associated documentation files (the "Software"), to deal in
  the Software without restriction, including without limitation the rights to
  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
  of the Software, and to permit persons to whom the Software is furnished to do
  so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
  */
  function camelize(str) {
    return str.replace(/(\-|\_|\.|\s)+(.)?/g, function(_match, _separator, chr) { return (chr ? '<wbr />' + chr.toUpperCase() : ''); }).replace(/(^|\/)([A-Z])/g, function(match /*, separator, chr */) { return match.toLowerCase(); }).replace(/(^|\/|\.)([a-z])/g, function(match /*, separator, chr */) { return match.toUpperCase(); });
  }


  return (
    <div className="container">
      <div id="name">TI4 Name Generator<wbr /></div>

      <select class="selector" id = "factionList" onchange = "selectFaction()">  
        <option> ---Choose Faction--- </option>  
        <option> Arborec </option>  
        <option> Barony of Letnev </option>  
        <option> The Clan of Saar </option>  
        <option> Embers of Muaat </option> 
        <option> Emirates of Hacan </option> 
        <option> Federation of Sol </option> 
        <option> Ghosts of Creuss </option> 
        <option> L1Z1X Mindnet </option> 
        <option> Mentak Coalition </option> 
        <option> Naalu Collective </option> 
        <option> Nekro Virus </option>
        <option> Sardakk N’Orr </option> 
        <option> Universities of Jol-Nar </option> 
        <option> Winnu </option> 
        <option> Xxcha Kingdom </option> 
        <option> Yin Brotherhood </option> 
        <option> Yssaril Tribes </option> 
        <option> Generic </option> 
      </select>  

      
      <select class="selector" id = "shipTypeList" onchange = "selectShip()" >  
        <option> ---Choose Ship Type--- </option>  
        <option> Cruiser </option>  
        <option> Dreadnought </option>  
        <option> War Sun </option>  
      </select>  

      <p id="user-warning"></p>
      <button  id="generate">Generate </button>

      <button  id="wildcard">Wildcard! </button>

      <p>(Randomize from all options)</p>

      <Footer />
    </div>
  )
}
