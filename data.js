/* Historical Conversations — Episode & Figure Data Layer (prototype)
   Per HC-Brand-Guidelines-v1 Part 9.6: every dynamic page generates from this single file.
   Adding an episode = adding one entry here. */

const HC = {
  site: {
    title: "Historical Conversations",
    sub: "Cape Cod",
    tagline: "The past has things to say.",
    domain: "historicalconversations.com"
  },

  categories: [
    "The Indigenous World",
    "Explorers & Cartographers",
    "Colonial Founders",
    "Revolutionary Era",
    "The Sea",
    "Writers & Naturalists",
    "Artists & Theater",
    "Science & Innovation",
    "Civil Rights & Modern Era"
  ],

  /* status: published | in-production | planned | tentative | coming-soon | deferred */
  figures: [
    {name:"Massasoit (Ousamequin)", dates:"c. 1581–1661", category:"The Indigenous World", town:"Cape Cod Region", region:"Upper Cape", century:"1600s", ep:null, status:"deferred", lat:41.65, lng:-70.48,
     hook:"Supreme sachem of the Wampanoag. His 1621 treaty with Plymouth held for fifty years."},
    {name:"Tisquantum (Squanto)", dates:"c. 1585–1622", category:"The Indigenous World", town:"Provincetown / Plymouth", region:"Outer Cape", century:"1600s", ep:null, status:"deferred", lat:42.0584, lng:-70.1787,
     hook:"Kidnapped, enslaved, returned home to find his world gone — then made Plymouth's survival possible."},
    {name:"Iyannough", dates:"c. 1600–1623", category:"The Indigenous World", town:"Cummaquid (Barnstable)", region:"Mid Cape", century:"1600s", ep:null, status:"deferred", lat:41.7064, lng:-70.2733,
     hook:"The young sachem whose kindness to lost Pilgrims gave Hyannis its name."},
    {name:"King Philip (Metacom)", dates:"c. 1638–1676", category:"The Indigenous World", town:"Cape Cod Region", region:"Upper Cape", century:"1600s", ep:null, status:"deferred", lat:41.68, lng:-70.45,
     hook:"The Wampanoag sachem who led the war that decided the fate of Native New England."},

    {name:"Bartholomew Gosnold", dates:"c. 1572–1607", category:"Explorers & Cartographers", town:"Provincetown", region:"Outer Cape", century:"1600s", ep:"EP-03", status:"planned", lat:42.0490, lng:-70.1930,
     hook:"Named Cape Cod in 1602 — then organized Jamestown. John Smith called him the prime mover."},
    {name:"Samuel de Champlain", dates:"1574–1635", category:"Explorers & Cartographers", town:"Chatham (Stage Harbor)", region:"Lower Cape", century:"1600s", ep:"EP-17", status:"tentative", lat:41.6688, lng:-69.9750,
     hook:"The French cartographer who mapped Cape harbors fifteen years before the Mayflower."},
    {name:"Nathaniel Southack", dates:"1651–1723", category:"Explorers & Cartographers", town:"Wellfleet", region:"Outer Cape", century:"1700s", ep:"EP-22", status:"tentative", lat:41.9376, lng:-70.0328,
     hook:"The king's cartographer sent to salvage the Whydah — who mapped the coast that beat him."},

    {name:"Rev. John Lothrop", dates:"1584–1653", category:"Colonial Founders", town:"Barnstable", region:"Mid Cape", century:"1600s", ep:null, status:"coming-soon", lat:41.7003, lng:-70.3002,
     hook:"Imprisoned in England for his faith; founded Barnstable in 1639."},
    {name:"Edmund Freeman", dates:"1596–1682", category:"Colonial Founders", town:"Sandwich", region:"Upper Cape", century:"1600s", ep:null, status:"coming-soon", lat:41.7590, lng:-70.4938,
     hook:"Co-founded Sandwich in 1637 — the Cape's first town."},
    {name:"Rev. Richard Bourne", dates:"1610–1682", category:"Colonial Founders", town:"Mashpee", region:"Upper Cape", century:"1600s", ep:null, status:"coming-soon", lat:41.6487, lng:-70.4814,
     hook:"The minister who secured legal land rights for the Mashpee Wampanoag."},
    {name:"Rev. Josiah Dennis", dates:"c. 1698–1763", category:"Colonial Founders", town:"Dennis", region:"Mid Cape", century:"1700s", ep:null, status:"coming-soon", lat:41.7354, lng:-70.1939,
     hook:"So beloved his town took his name — a rare honor. His manse still stands."},

    {name:"James Otis Jr.", dates:"1725–1783", category:"Revolutionary Era", town:"West Barnstable", region:"Mid Cape", century:"1700s", ep:"EP-08", status:"planned", lat:41.7057, lng:-70.3745,
     hook:"“Taxation without representation is tyranny.” The Revolution's first voice came from the Cape."},
    {name:"Mercy Otis Warren", dates:"1728–1814", category:"Revolutionary Era", town:"Barnstable", region:"Mid Cape", century:"1700s", ep:"EP-06", status:"planned", lat:41.7003, lng:-70.3002,
     hook:"No vote, no office, no schooling — she helped make a revolution with her pen anyway."},

    {name:"Samuel Bellamy (“Black Sam”)", dates:"1689–1717", category:"The Sea", town:"Wellfleet", region:"Outer Cape", century:"1700s", ep:"EP-02", status:"in-production", lat:41.9180, lng:-69.9870,
     hook:"Ran his pirate ship as a democracy. Lost it — and 143 men — in the Wellfleet surf."},
    {name:"Mad Jack Percival", dates:"1779–1862", category:"The Sea", town:"West Barnstable", region:"Mid Cape", century:"1800s", ep:"EP-07", status:"planned", lat:41.7057, lng:-70.3745,
     hook:"Sailed USS Constitution around the world — the Navy's most colorful captain."},
    {name:"Captain Edward Penniman", dates:"1831–1913", category:"The Sea", town:"Eastham", region:"Outer Cape", century:"1800s", ep:"EP-10", status:"planned", lat:41.8190, lng:-69.9750,
     hook:"Whaling made him rich; the whale jaw-bone gate at his Eastham mansion still says so."},
    {name:"Asa Eldridge", dates:"1809–1856", category:"The Sea", town:"Yarmouth Port", region:"Mid Cape", century:"1800s", ep:"EP-16", status:"tentative", lat:41.7090, lng:-70.2495,
     hook:"Drove the Red Jacket across the Atlantic in 13 days — a sailing record that still stands."},
    {name:"U.S. Life-Saving Service Surfmen", dates:"1872–1915", category:"The Sea", town:"Outer Beach", region:"Outer Cape", century:"1800s", ep:null, status:"coming-soon", lat:41.8439, lng:-69.9445,
     hook:"“You have to go out. You don't have to come back.” The Cape's quiet heroes."},
    {name:"Ichabod Paddock", dates:"17th century", category:"The Sea", town:"Yarmouth", region:"Mid Cape", century:"1600s", ep:null, status:"coming-soon", lat:41.7054, lng:-70.2286,
     hook:"The Cape whaleman who taught Nantucket how to whale."},
    {name:"Betsey Knowles Penniman", dates:"19th century", category:"The Sea", town:"Eastham", region:"Outer Cape", century:"1800s", ep:null, status:"coming-soon", lat:41.8190, lng:-69.9750,
     hook:"The captain's wife who sailed the world, navigated the ship, and kept the log."},

    {name:"Henry David Thoreau", dates:"1817–1862", category:"Writers & Naturalists", town:"Brewster / Outer Beach", region:"Outer Cape", century:"1800s", ep:"EP-01", status:"published", lat:41.8580, lng:-69.9510,
     hook:"Walked the Cape four times and wrote the book that still defines it."},
    {name:"Henry Beston", dates:"1888–1968", category:"Writers & Naturalists", town:"Eastham", region:"Outer Cape", century:"1900s", ep:"EP-09", status:"planned", lat:41.8301, lng:-69.9740,
     hook:"Spent a year alone in a two-room house on the great beach — and wrote The Outermost House."},
    {name:"Katharine Lee Bates", dates:"1859–1929", category:"Writers & Naturalists", town:"Falmouth", region:"Upper Cape", century:"1800s", ep:"EP-13", status:"tentative", lat:41.5515, lng:-70.6148,
     hook:"Born in Falmouth. Wrote “America the Beautiful.”"},
    {name:"Rachel Carson", dates:"1907–1964", category:"Writers & Naturalists", town:"Woods Hole", region:"Upper Cape", century:"1900s", ep:"EP-14", status:"tentative", lat:41.5265, lng:-70.6712,
     hook:"The sea found her at Woods Hole. Silent Spring found the world."},
    {name:"Mary Oliver", dates:"1935–2019", category:"Writers & Naturalists", town:"Provincetown", region:"Outer Cape", century:"1900s", ep:"EP-21", status:"tentative", lat:42.0584, lng:-70.1787,
     hook:"Forty years of walking the Provincetown woods became some of America's most loved poems."},
    {name:"Thornton Burgess", dates:"1874–1965", category:"Writers & Naturalists", town:"Sandwich", region:"Upper Cape", century:"1900s", ep:null, status:"coming-soon", lat:41.7590, lng:-70.4938,
     hook:"The Sandwich boy who turned the briar patch into ten thousand bedtime stories."},
    {name:"Kurt Vonnegut", dates:"1922–2007", category:"Writers & Naturalists", town:"Barnstable Village", region:"Mid Cape", century:"1900s", ep:null, status:"coming-soon", lat:41.7003, lng:-70.3002,
     hook:"Wrote Cat's Cradle while running a Cape Cod Saab dealership. So it goes."},
    {name:"Norman Mailer", dates:"1923–2007", category:"Writers & Naturalists", town:"Provincetown", region:"Outer Cape", century:"1900s", ep:null, status:"coming-soon", lat:42.0584, lng:-70.1787,
     hook:"Six decades of writing, brawling, and watching the light at land's end."},

    {name:"Eugene O'Neill", dates:"1888–1953", category:"Artists & Theater", town:"Provincetown", region:"Outer Cape", century:"1900s", ep:"EP-05", status:"planned", lat:42.0530, lng:-70.1830,
     hook:"An unknown with sea-haunted plays. A wharf theater said yes — and American drama changed."},
    {name:"Charles Hawthorne", dates:"1872–1930", category:"Artists & Theater", town:"Provincetown", region:"Outer Cape", century:"1900s", ep:null, status:"coming-soon", lat:42.0584, lng:-70.1787,
     hook:"Founded the Cape Cod School of Art in 1899 and made Provincetown an art colony."},
    {name:"Hans Hofmann", dates:"1880–1966", category:"Artists & Theater", town:"Provincetown", region:"Outer Cape", century:"1900s", ep:"EP-19", status:"tentative", lat:42.0584, lng:-70.1787,
     hook:"The teacher who made Provincetown a classroom for American modernism."},
    {name:"Edward Hopper", dates:"1882–1967", category:"Artists & Theater", town:"Truro", region:"Outer Cape", century:"1900s", ep:"EP-15", status:"tentative", lat:42.0014, lng:-70.0492,
     hook:"Forty summers in Truro chasing the same thing: the way light falls on a wall."},
    {name:"Edward Gorey", dates:"1925–2000", category:"Artists & Theater", town:"Yarmouth Port", region:"Mid Cape", century:"1900s", ep:"EP-18", status:"tentative", lat:41.7090, lng:-70.2495,
     hook:"The master of the elegant macabre, at home on Strawberry Lane with six cats."},
    {name:"Susan Glaspell", dates:"1876–1948", category:"Artists & Theater", town:"Provincetown", region:"Outer Cape", century:"1900s", ep:null, status:"coming-soon", lat:42.0584, lng:-70.1787,
     hook:"Co-founded the Provincetown Players on a wharf — and won a Pulitzer of her own."},
    {name:"Mary Heaton Vorse", dates:"1874–1966", category:"Artists & Theater", town:"Provincetown", region:"Outer Cape", century:"1900s", ep:null, status:"coming-soon", lat:42.0584, lng:-70.1787,
     hook:"Labor journalist whose fish wharf became the most important small stage in America."},

    {name:"Guglielmo Marconi", dates:"1874–1937", category:"Science & Innovation", town:"South Wellfleet", region:"Outer Cape", century:"1900s", ep:"EP-04", status:"published", lat:41.8831, lng:-69.9728,
     hook:"From a crumbling Wellfleet bluff, the first wireless message ever to cross the Atlantic from America."},
    {name:"Percival Lowell", dates:"1855–1916", category:"Science & Innovation", town:"Cape Cod", region:"Cape-wide", century:"1900s", ep:null, status:"coming-soon", lat:41.79, lng:-70.07,
     hook:"The astronomer whose search for Planet X found Pluto — fourteen years after his death."},
    {name:"Albert Szent-Györgyi", dates:"1893–1986", category:"Science & Innovation", town:"Woods Hole", region:"Upper Cape", century:"1900s", ep:"EP-23", status:"tentative", lat:41.5265, lng:-70.6712,
     hook:"Nobel laureate who isolated vitamin C — and spent forty years asking questions at Woods Hole."},
    {name:"Otto Loewi", dates:"1873–1961", category:"Science & Innovation", town:"Woods Hole", region:"Upper Cape", century:"1900s", ep:null, status:"coming-soon", lat:41.5265, lng:-70.6712,
     hook:"Dreamed the experiment that proved how nerves speak — then summered where the science lived."},
    {name:"Ethel Browne Harvey", dates:"1885–1965", category:"Science & Innovation", town:"Woods Hole", region:"Upper Cape", century:"1900s", ep:null, status:"coming-soon", lat:41.5265, lng:-70.6712,
     hook:"Her sea-urchin embryology at Woods Hole rewrote what we know about the beginning of life."},
    {name:"Edmund Beecher Wilson", dates:"1856–1939", category:"Science & Innovation", town:"Woods Hole", region:"Upper Cape", century:"1900s", ep:null, status:"coming-soon", lat:41.5265, lng:-70.6712,
     hook:"The cell biologist who tied chromosomes to heredity — summer after summer at the MBL."},

    {name:"Eugenia Fortes", dates:"20th century", category:"Civil Rights & Modern Era", town:"Hyannis", region:"Mid Cape", century:"1900s", ep:"EP-11", status:"planned", lat:41.6362, lng:-70.3071,
     hook:"Refused to leave a segregated beach in 1945 — a decade before Rosa Parks kept her seat."},
    {name:"Roland C. Nickerson", dates:"1841–1899", category:"Civil Rights & Modern Era", town:"Brewster", region:"Lower Cape", century:"1800s", ep:"EP-12", status:"planned", lat:41.7601, lng:-70.0828,
     hook:"His family's grief became Massachusetts' first state park."},
    {name:"Stanley Kunitz", dates:"1905–2006", category:"Civil Rights & Modern Era", town:"Provincetown", region:"Outer Cape", century:"1900s", ep:"EP-24", status:"tentative", lat:42.0584, lng:-70.1787,
     hook:"U.S. Poet Laureate at 95. His seaside garden still grows on Commercial Street."},
    {name:"John F. Kennedy", dates:"1917–1963", category:"Civil Rights & Modern Era", town:"Hyannis Port", region:"Mid Cape", century:"1900s", ep:"EP-20", status:"tentative", lat:41.6336, lng:-70.3036,
     hook:"The president who signed the Cape Cod National Seashore into law — and sailed home to it."}
  ],

  /* Buzzsprout account — fill podcastId once confirmed from the dashboard URL.
     Episode IDs from Michael's dashboard, June 2026. Embeds go live when episodes are published. */
  buzzsprout: {
    podcastId: "2610205",     // confirmed via feeds.buzzsprout.com/2610205.rss
    /* id + Buzzsprout's own slug (must match exactly for the embed script URL) */
    ids: {
      "EP-01": {id:"19134658", slug:"the-earned-view-henry-david-thoreau"},
      "EP-02": {id:"19104167", slug:"the-wall-of-white-foam-black-sam-bellamy"},
      "EP-04": {id:"19137239", slug:"the-signal-from-the-bluff-guglielmo-marconi"},
      "EP-06": {id:"19045381", slug:"the-revolution-s-secret-pen-mercy-otis-warren-ep-06"}
    }
  },

  episodes: {
    "EP-01": {
      slug:"the-earned-view-henry-david-thoreau",
      title:"The Earned View — Henry David Thoreau",
      figure:"Henry David Thoreau",
      meta:"Episode 01 · Brewster, MA · October 1849 · 10 min",
      pullQuote:"The Cape asks everything and offers very little in return — which is, I suspect, why the people here are so remarkably themselves.",
      attribution:"— Henry David Thoreau, 1849",
      image:null,
      showNotes:[
        "Henry David Thoreau walked Cape Cod four times between 1849 and 1857. He came not as a tourist but as a walker — a man who believed the difficulty of getting somewhere was part of what it gave you. What he found on the outer beach was something the cities of his era couldn't offer: indifference. The Atlantic didn't know his name. It didn't know anyone's name. He found that clarifying.",
        "His account, simply titled Cape Cod, was published posthumously in 1865. It remains the definitive literary portrait of this peninsula — wry, precise, and as alive today as the beach he walked. The Cape Cod National Seashore, established in 1961, protects the forty miles of outer beach he described. You can walk it today."
      ],
      footsteps:"The outer beach Thoreau walked is preserved as the Cape Cod National Seashore. Park at Nauset Light Beach in Eastham and walk south — this is the stretch he described most vividly. The Highland Light in Truro, which he visited on every trip, is still operational and open to visitors seasonally. The Cape Cod National Seashore Visitor Center in Eastham has maps and exhibits on the natural history of the outer beach.",
      resources:[
        ["PBS American Experience — Thoreau","https://www.pbs.org/wgbh/americanexperience/"],
        ["Wikipedia — Henry David Thoreau","https://en.wikipedia.org/wiki/Henry_David_Thoreau"],
        ["Cape Cod National Seashore","https://www.nps.gov/caco/"]
      ],
      cta:{title:"Walk the Outer Beach with Thoreau", text:"Get the companion audio guide — a narrated walking tour of Thoreau's Cape Cod route, from Nauset Light to Highland Light. Free for email subscribers."}
    },

    "EP-02": {
      slug:"the-wall-of-white-foam-black-sam-bellamy",
      title:"The Wall of White Foam — Black Sam Bellamy",
      figure:"Samuel Bellamy (“Black Sam”)",
      meta:"Episode 02 · Wellfleet, MA · April 1717 · 12 min",
      pullQuote:"Dress theft in fine language and suddenly it passes for government.",
      attribution:"— Samuel Bellamy, Wellfleet, 1717",
      image:null,
      showNotes:[
        "In the spring of 1717, a 28-year-old Devonshire sailor named Samuel Bellamy was heading home to Cape Cod with the largest pirate haul in recorded history. In fourteen months of piracy he had captured more than fifty ships, freed the enslaved crew of a three-masted slave vessel called the Whydah Gally, and run his ship as a floating democracy — every man with a vote and a share. On the night of April 26, a nor'easter caught the Whydah five hundred feet off the Wellfleet dunes. One hundred and forty-four men drowned. Two survived. Bellamy was not one of them.",
        "In this episode, we ask Black Sam Bellamy the same five questions we ask every figure in the series. He speaks about what the Cape demands, what strangers miss when they arrive, why he fears the loss of liberty more than the loss of his ship, and what the sea really means to a man who has staked everything on it. The wreck of the Whydah was discovered in 1984 — the only fully authenticated Golden Age pirate shipwreck in the world. You can visit the site and the museum today."
      ],
      footsteps:"Start at Marconi Beach in Wellfleet, part of the Cape Cod National Seashore. Park in the main lot, walk out to the bluff, and face the Atlantic. Look directly east, five hundred feet into the surf — that is where the Whydah broke apart on the night of April 26, 1717. Then drive thirty minutes south to the Whydah Pirate Museum in West Yarmouth (674 Main St). The ship's bell is there. So are the names. If you can do them in that order — bluff first, then museum — you'll understand the difference between the Cape's two histories: the one in the sand, and the one behind glass.",
      resources:[
        ["Whydah Pirate Museum — West Yarmouth","https://www.whydah.com"],
        ["NPS — Marconi Station / Wellfleet","https://www.nps.gov/caco/planyourvisit/marconi-station.htm"],
        ["Colin Woodard, The Republic of Pirates","https://www.colinwoodard.com/republicofpirates"]
      ],
      cta:{title:"Hear the Democracy at Sea", text:"A bonus 10-minute deep dive into the Whydah's articles of agreement — the pirate constitution that gave every man on Bellamy's ship an equal vote and an equal share. Free when you join the email list."}
    },

    "EP-03": {
      slug:"the-name-on-the-map-bartholomew-gosnold",
      title:"The Name on the Map — Bartholomew Gosnold",
      figure:"Bartholomew Gosnold",
      meta:"Episode 03 · Provincetown / Cuttyhunk, MA · 1602 · — min",
      pullQuote:"I am the stranger. Let us not pretend otherwise.",
      attribution:"— Bartholomew Gosnold, Provincetown, 1602",
      image:"assets/ep03-gosnold.jpg",
      showNotes:[
        "In the spring of 1602, Captain Bartholomew Gosnold commanded the Concord on the first recorded English voyage to Cape Cod. Sailing a direct route across the Atlantic that bypassed Spanish-controlled waters, he made landfall in forty-nine days. He named Cape Cod for the fish that surrounded his ship, named Martha's Vineyard for his infant daughter who had died in England, and attempted the first English settlement in New England on Cuttyhunk Island. The colony lasted barely three weeks before dwindling supplies and rising tensions with the Wampanoag forced a return to England.",
        "But Gosnold's ambitions only grew. Four years later, he organized the Virginia Company, recruited Captain John Smith, secured a royal charter from King James I, and sailed to Virginia as vice admiral of the Jamestown fleet. Smith later called him the “prime mover” of the whole enterprise. Gosnold died at Jamestown in August 1607, age thirty-six, just three months after landing. The forgotten architect of English America, his most enduring legacy remains the name he gave to a sandy, windswept headland: Cape Cod."
      ],
      footsteps:"The closest you can get to Gosnold's landfall is the Province Lands Visitor Center in Provincetown, part of the Cape Cod National Seashore. Stand on the observation deck and look out at the Atlantic — the dunes, the salt marsh, and the curve of the outer beach are close to what Gosnold saw in 1602. For the settlement story, Cuttyhunk Island (reachable by seasonal ferry from New Bedford) has a stone memorial tower marking the approximate site of the first English fort in New England. The Pilgrim Monument and Provincetown Museum and the Cape Cod Museum of Natural History in Brewster both cover pre-Pilgrim exploration of the Cape.",
      resources:[
        ["John Brereton, A Briefe and True Relation (1602)","https://www.americanjourneys.org/"],
        ["Encyclopedia Virginia — Bartholomew Gosnold","https://encyclopediavirginia.org/entries/gosnold-bartholomew-1571-1607/"],
        ["Historic Jamestowne — Captain Bartholomew Gosnold","https://historicjamestowne.org/"]
      ],
      cta:{title:"Bonus: The Gosnold Blueprint", text:"Download the visual companion deck — a slide-by-slide breakdown of Gosnold's 1602 voyage, his navigational innovation, and the connections between Cape Cod and Jamestown. Free for email subscribers."}
    },

    "EP-04": {
      slug:"the-signal-from-the-bluff-guglielmo-marconi",
      title:"The Signal from the Bluff — Guglielmo Marconi",
      figure:"Guglielmo Marconi",
      meta:"Episode 04 · South Wellfleet, MA · January 1903 · 20 min",
      pullQuote:"This place asks for everything you have, and then it asks again.",
      attribution:"— Guglielmo Marconi, South Wellfleet, 1903",
      image:"assets/ep04-marconi.jpg",
      showNotes:[
        "In February 1901, a 28-year-old Italian entrepreneur stepped off the train in South Wellfleet — a town in economic freefall, its wharves rotting, its fleets gone. Where the locals saw a dying economy, Guglielmo Marconi saw geography: a 130-foot bluff, the easternmost high ground in the United States, with nothing between it and Europe but three thousand miles of ocean. The locals in Truro had already refused to sell him land. They called him a charlatan. He bought eight acres on the bluff and built twenty 200-foot masts. That November, a nor'easter tore the entire array to splinters before a single message had been sent. He rebuilt.",
        "On January 18, 1903, President Theodore Roosevelt's greeting to King Edward VII left this bluff in Morse code and crossed the Atlantic without a wire — the first transatlantic wireless message ever sent from the United States. The station went on to serve the great ocean liners; in April 1912 its operators played a role in the rescue of 705 Titanic survivors. The sea that gave Marconi his sightline took its fee: the cliff loses three feet a year, and by 1920 the ocean had begun swallowing the site. Today the towers are gone, but the bluff remains — and so does everything the signal started."
      ],
      footsteps:"The Marconi Station Site in South Wellfleet is part of the Cape Cod National Seashore, with free admission. Stand at the observation deck and look east — nothing between you and Europe but open Atlantic. Interpretive panels mark where the four rebuilt towers stood; parts of the original site are now underwater off the beach below. Pair it with Marconi Beach just south, and note the cliff edge: the erosion that doomed the station is still visibly at work.",
      resources:[
        ["NPS — Marconi Station Site","https://www.nps.gov/caco/planyourvisit/marconi-station.htm"],
        ["Wikipedia — Guglielmo Marconi","https://en.wikipedia.org/wiki/Guglielmo_Marconi"],
        ["Wellfleet Historical Society","https://www.wellfleethistoricalsociety.org/"]
      ],
      cta:{title:"Watch: The Invisible Bridge", text:"A visual companion to this episode — Marconi's gamble at Cape Cod in three minutes. Free for email subscribers."}
    },

    "EP-06": {
      slug:"the-revolutions-secret-pen-mercy-otis-warren",
      title:"The Revolution's Secret Pen — Mercy Otis Warren",
      figure:"Mercy Otis Warren",
      meta:"Episode 06 · Barnstable, MA · 1728–1814 · 15 min",
      pullQuote:"The revolution was not finished in 1783. It is still going on.",
      attribution:"— Mercy Otis Warren, Barnstable",
      image:null,
      showNotes:[
        "Before she was a playwright, a pamphleteer, a constitutional critic, or a historian — she was a girl in Barnstable who was not allowed to go to school. Her brothers were. She watched. And from that distance, Mercy Otis Warren learned to read the world more clearly than most people who were in the middle of it.",
        "Warren was born in Barnstable in 1728. No formal education. No official office. No vote. She shaped how the founders thought about the crisis, published satires that made royal governors look ridiculous, warned against the Constitution before there was a Bill of Rights, and wrote the first major history of the American Revolution by a woman — under her own name, at age seventy-seven. John Adams, who admired her and quarreled with her in equal measure, once wrote that he had been charmed by three characters drawn by a most masterly pen. He didn't know, at that moment, who held it."
      ],
      footsteps:"Barnstable County Courthouse, Route 6A, Barnstable Village. A bronze statue of Warren stands outside — a working civic building in her home county, which feels exactly right. The Sturgis Library, just down the road at 3090 Main Street, is one of the oldest library buildings in the United States and holds local history materials tied to the Otis family and colonial Barnstable. If you make it to Plymouth — about an hour from the Cape — Burial Hill is where she rests, looking out over Plymouth Harbor.",
      resources:[
        ["Massachusetts Historical Society — Warren papers","https://www.masshist.org/"],
        ["Wikipedia — Mercy Otis Warren","https://en.wikipedia.org/wiki/Mercy_Otis_Warren"],
        ["Sturgis Library, Barnstable","https://sturgislibrary.org/"]
      ],
      cta:{title:"Free Bonus Audio: Warren and the New Constitution", text:"A deep-dive audio on Warren's 1788 anti-Federalist pamphlet — and what it means that the Bill of Rights she demanded was ratified three years later. Free for email subscribers."}
    }
  },

  /* The five signature questions — canonical per HC-SKILL v1.3 (confirmed by Michael, June 2026) */
  questions: [
    "What does this place ask of the people who live here?",
    "What do you make of the strangers who come to this shore?",
    "What do you fear will be lost if things continue as they are?",
    "What does the sea mean to you — is it a road, a wall, or something else entirely?",
    "If someone arrived here for the first time tomorrow, what would you want them to understand before they took a single step?"
  ]
};
