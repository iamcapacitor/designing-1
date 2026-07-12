"use client"
import React, { useEffect, useState } from 'react'
import FortMap from './components/FortMap'
import { ArrowUp } from "lucide-react";


const incompleteMarathi = [
  { id: 8, title: "मशिद मोर्चा", x: 35.13, y: 39, description: "This is Description" },


  { id: 12, title: "लोहस्तंब", x: 35.13, y: 39, description: "This is Description" },

  { id: 23, title: "खास बाग", x: 35.13, y: 39, description: "This is Description" },
  { id: 25, title: "धान्य कोठार", x: 35.13, y: 39, description: "This is Description" },


  { id: 32, title: "दारु कोठार", x: 35.13, y: 39, description: "This is Description" },
  { id: 33, title: "निसनीची गुहा", x: 35.13, y: 39, description: "This is Description" },

  { id: 38, title: "शिवबंदी", x: 35.13, y: 39, description: "This is Description" },
  { id: 39, title: "काळा हौद", x: 35.13, y: 39, description: "This is Description" },
  { id: 40, title: "भवानी तलाव", x: 35.13, y: 39, description: "This is Description" },
  { id: 41, title: "भवानी कडा", x: 79.17, y: 55.33, description: "This is Description" },
  { id: 42, title: "बारा टाकी", x: 35.13, y: 39, description: "This is Description" },
  { id: 43, title: "धान्य कोठार 2", x: 35.13, y: 39, description: "This is Description" },
];
const markersMarathi = [
  {
    id: 13, title: "हत्ती तलाव", x: 35.13, y: 39, description: "This is called Hatti Talav"
  },
  {
    id: 3, title: "वाघ बीळ",
    x: 0.63, y: 27.81,
    description: "This is Description"
  },
  {
    id: 4, title: "चित्त दरवाजा",
    x: 1.74, y: 31.04,
    description: "This is Description"
  },
  {
    id: 5, title: "खुबलढा बुरुज",
    x: 3.13, y: 32.14,
    description: "This is Description"
  },
  { id: 6, title: "वाळुसरे खिंड", x: 10.35, y: 47.91, description: "This is Description" },
  { id: 7, title: "नाणे दरवाजा", x: 9.79, y: 42.42, description: "This is Description" },
  { id: 9, title: "अंधेऱ्या लेणी", x: 28.4, y: 32.45, description: "This is Description" },
  { id: 10, title: "महा दरवाजा", x: 27.38, y: 38.77, description: "This is Description" },
  { id: 11, title: "पाणी टाकी", x: 26.18, y: 41.4, description: "This is Description" },
  { id: 14, title: "हनुमान टाके", x: 36.88, y: 38.72, description: "This is Description" },
  { id: 15, title: "हत्ती खाना", x: 36.6, y: 42.96, description: "This is Description" },
  { id: 16, title: "शिरकाईदेवी मंदिर", x: 35.21, y: 43.49, description: "This is Description" },
  { id: 17, title: "गंगासागर तलाव", x: 33.82, y: 47.12, description: "This is Description" },
  { id: 18, title: "होळीचा माळ", x: 37.08, y: 46.27, description: "This is Description" },
  { id: 19, title: "छत्रपती श्री शिवाजी महाराजांचा पुतळा", x: 37.29, y: 47.45, description: "This is Description" },
  { id: 20, title: "नगारखाना", x: 36.32, y: 51.4, description: "This is Description" },
  { id: 21, title: "राजसदर", x: 35.56, y: 51.73, description: "This is Description" },
  { id: 22, title: "खलबतखाना", x: 33.33, y: 50.59, description: "This is Description" },
  { id: 24, title: "राणी वसा", x: 31.67, y: 52.75, description: "This is Description" },
  { id: 26, title: "अष्टप्रधानांचे वाडे", x: 34.72, y: 54.69, description: "This is Description" },
  { id: 27, title: "मनोरे", x: 33.13, y: 49.44, description: "This is Description" },
  { id: 28, title: "पालखी दरवाजा", x: 32.29, y: 50.33, description: "This is Description" },
  { id: 29, title: "तलाव", x: 23.13, y: 46.02, description: "This is Description" },
  {
    id: 30, title: "हिरकणी बुरुज",
    x: 16.53, y: 45.71,
    description: "This is Description"
  },
  { id: 31, title: "बाजारपेठ", x: 38.68, y: 39.03, description: "This is Description" },
  { id: 34, title: "टक मक टोक", x: 35.49, y: 18.85, description: "This is Description" },
  { id: 35, title: "कोळींब तलाव", x: 51.67, y: 29.28, description: "This is Description" },
  { id: 36, title: "जगदिश्वराचे मंदिर", x: 52.71, y: 35.66, description: "This is Description" },
  { id: 37, title: "छत्रपती श्री शिवाजी महाराजांची समाधी", x: 53.75, y: 35.66, description: "This is Description" },
  { id: 44, title: "वाघ दरवाजा", x: 46.94, y: 59.56, description: "This is Description" },
  { id: 45, title: "कुशावर्त तलाव", x: 39.65, y: 56.25, description: "This is Description" },
  { id: 46, title: "वाडेश्वर महादेव मंदिर", x: 38.47, y: 55.94, description: "This is Description" },
  { id: 47, title: "मेणा दरवाजा", x: 31.94, y: 56.04, description: "This is Description" },
  { id: 48, title: "रोप-वे", x: 32.71, y: 61.48, description: "This is Description" },
  { id: 49, title: "पोटल्याचा डोंगर", x: 47.64, y: 95.46, description: "This is Description" }
];
const markers = [
  {
    id: 13, title: "Hatti Talav",
    x: 35.13, y: 39,
    description: "Hatti Talav (Elephant Tank) is a large rock-cut water reservoir on Raigad Fort. It served as a dependable year-round water source for the fort and is believed to have supplied water for elephants and other animals stationed on the fort."
  },
  {
    id: 3, title: "Tiger Cave",
    x: 0.63, y: 27.81,
    description: "Tiger Cave is a natural rock shelter located along one of the approaches to Raigad Fort. It is believed to have served as a resting place for guards, trekkers, and soldiers while ascending the steep route to the fort."
  },
  {
    id: 4, title: "Chitta Darwaja",
    x: 1.74, y: 31.04,
    description: "Chitta Darwaja, also known locally as Jit Darwaja, is an ancient entrance at the foothills of Raigad Fort near Raigadwadi village. It formed part of the traditional trekking route leading towards the strategically important Khubladha Buruj."
  },
  {
    id: 5, title: "Khubladha Buruj",
    x: 3.13, y: 32.14,
    description: "Khubladha Buruj is a prominent defensive bastion on the main trekking route to Raigad Fort. It guarded the approach from Chitta Darwaja and provided soldiers with a strategic vantage point to monitor and defend against advancing enemies."
  },
  {
    id: 6, title: "Valusare Khind",
    x: 10.35, y: 47.91,
    description: "Valusare Khind is a mountain pass near Raigad that connected the fort with surrounding villages. The pass served as an important access route for communication, movement of troops, and transportation of supplies during the Maratha period."
  },
  {
    id: 7, title: "Nane Gate",
    x: 9.79, y: 42.42,
    description: "Nane Gate is one of the historic entrances to Raigad Fort, used primarily by residents and for the movement of goods. Unlike the grand Maha Darwaja, it functioned as a secondary access point while strengthening the fort's layered defensive system."
  },
  {
    id: 9, title: "Andherya Cave",
    x: 28.4, y: 32.45,
    description: "Andherya Cave is a natural rock cave situated near the ascent to Raigad Fort. Its sheltered interior is believed to have provided temporary refuge for guards and travellers, and today it serves as a notable landmark on the trekking route."
  },
  {
    id: 10, title: "Maha Darwaja",
    x: 27.38, y: 38.77,
    description: "Maha Darwaja is the magnificent principal entrance of Raigad Fort. Flanked by two massive bastions, the gateway was designed to control access and strengthen the fort's defenses, making it one of the finest examples of Maratha military architecture."
  },
  {
    id: 11, title: "Water Tank",
    x: 26.18, y: 41.4,
    description: "This rock-cut water tank is one of the many reservoirs constructed to ensure a reliable water supply throughout the year. Such tanks played a vital role in sustaining the fort's residents, soldiers, and animals during prolonged occupation or siege."
  },
  {
    id: 14, title: "Hanuman Tank",
    x: 36.88, y: 38.72,
    description: "Hanuman Tank is one of the rock-cut water reservoirs on Raigad Fort. It formed part of the fort's well-planned water conservation system, ensuring a dependable supply of water for residents and soldiers throughout the year."
  },
  {
    id: 15, title: "Hatti Khana",
    x: 36.6, y: 42.96,
    description: "Hatti Khana, meaning 'Elephant Stable', was the area where the royal elephants of Raigad were housed and cared for. The structure reflects the importance of elephants in the military, ceremonial, and administrative activities of the Maratha capital."
  },
  {
    id: 16, title: "Shrikaidevi Temple",
    x: 35.21, y: 43.49,
    description: "The Shirkaidevi Temple is dedicated to Goddess Shirkai, the presiding deity of Raigad Fort. It remains an important place of worship and continues to attract devotees and visitors exploring the historic capital of Chhatrapati Shivaji Maharaj."
  },
  {
    id: 17, title: "Gangasagar Tank",
    x: 33.82, y: 47.12,
    description: "Gangasagar Tank is the largest and most prominent water reservoir on Raigad Fort. Constructed during Chhatrapati Shivaji Maharaj's reign, it supplied water to the royal capital and remains one of the fort's most important landmarks."
  },
  {
    id: 18, title: "Holicha Maal",
    x: 37.08, y: 46.27,
    description: "Holicha Maal is an open ground where the festival of Holi was traditionally celebrated during the Maratha period. It also served as a gathering place for public ceremonies and community events within the fort."
  },
  {
    id: 19, title: "Statue of Chhatrapati Shri Shivaji Maharaj",
    x: 37.29, y: 47.45,
    description: "This bronze equestrian statue commemorates Chhatrapati Shivaji Maharaj, the founder of the Maratha Empire. It stands near the royal complex, honoring the ruler who made Raigad the capital of his kingdom in 1674."
  },
  {
    id: 20, title: "Nagarkhana",
    x: 36.32, y: 51.4,
    description: "Nagarkhana, or the Drum House, stands at the entrance to the royal court. Ceremonial drums and trumpets were played here to announce royal arrivals, important events, and official proclamations."
  },
  {
    id: 21, title: "Rajsadar",
    x: 35.56, y: 51.73,
    description: "Rajsadar was the royal audience hall where Chhatrapati Shivaji Maharaj conducted state affairs, received ambassadors, and held meetings with his ministers. It formed the administrative heart of Raigad Fort."
  },
  {
    id: 22, title: "Chamber for Secret Discussion",
    x: 33.33, y: 50.59,
    description: "Located near the Rajsadar, this chamber is traditionally believed to have been used for confidential meetings on matters of governance, diplomacy, and military strategy. Its secluded location provided privacy for important discussions."
  },
  {
    id: 24, title: "Queen's Palaces",
    x: 31.67, y: 52.75,
    description: "The Queen's Palaces comprise the residential quarters built for the queens of Chhatrapati Shivaji Maharaj. The complex consisted of several independent palaces, close to the royal court."
  },
  {
    id: 26, title: "Ashthpradhan Residence",
    x: 34.72, y: 54.69,
    description: "These residences were allotted to members of the Ashtapradhan, the council of eight ministers established by Chhatrapati Shivaji Maharaj. Their proximity to the royal court enabled efficient administration of the Maratha Empire."
  },
  {
    id: 27, title: "Manore",
    x: 33.13, y: 49.44,
    description: "The Manore are a pair of historic stone towers located near the royal complex of Raigad Fort. Their exact purpose remains uncertain, though historians suggest they may have served as watchtowers, observation towers, or ceremonial structures."
  },
  {
    id: 28, title: "Palanquin Gate",
    x: 32.29, y: 50.33,
    description: "Palanquin Gate (Palkhi Darwaja) served as a special entrance used by members of the royal family and dignitaries travelling in palanquins. It provided direct access to the royal residential complex within Raigad Fort."
  },
  {
    id: 29, title: "Tank",
    x: 23.13, y: 46.02,
    description: "This rock-cut water tank formed part of Raigad Fort's extensive water storage system. Such reservoirs collected rainwater and ensured a reliable supply for the fort's inhabitants throughout the year."
  },
  {
    id: 30, title: "Hirkani Buruj",
    x: 16.53, y: 45.71,
    description: "Hirkani Buruj is named after the milkmaid Hirkani, who, according to Maratha tradition, climbed down the steep cliff at night to reach her infant after the fort gates were closed. Impressed by her courage, Chhatrapati Shivaji Maharaj ordered a bastion to be built at the spot, which came to bear her name."
  },
  {
    id: 31, title: "Market Place",
    x: 38.68, y: 39.03,
    description: "The Market Place (Bazarpeth) was the commercial center of Raigad Fort. It consisted of rows of stone-built shops where merchants traded goods required by the royal court, soldiers, and residents of the Maratha capital."
  },
  {
    id: 34, title: "Tak Mak Point",
    x: 35.49, y: 18.85,
    description: "Tak Mak Point is a dramatic cliff offering panoramic views of the surrounding Sahyadri ranges. Historical accounts and local tradition associate it with the execution of prisoners and traitors by casting them into the deep valley below."
  },
  {
    id: 35, title: "Kolimb Tank",
    x: 51.67, y: 29.28,
    description: "Kolimb Tank is a perennial rock-cut water reservoir on Raigad Fort. It is known for providing a dependable supply of fresh water and remains one of the best-preserved tanks on the fort."
  },
  {
    id: 36, title: "Jagadishwar Temple",
    x: 52.71, y: 35.66,
    description: "Jagadishwar Temple was built by Chhatrapati Shivaji Maharaj in 1674 and is dedicated to Lord Shiva. It was the royal temple of the Maratha capital and remains one of the best-preserved monuments on Raigad Fort."
  },
  {
    id: 37, title: "Samadhi of Chhatrapati Shri Shivaji Maharaj",
    x: 53.75, y: 35.66,
    description: "The Samadhi marks the cremation site and memorial of Chhatrapati Shivaji Maharaj, who passed away at Raigad Fort on 3 April 1680. It is one of the most revered monuments in Maharashtra and attracts thousands of visitors every year."
  },
  {
    id: 44, title: "Tiger Gate",
    x: 46.94, y: 59.56,
    description: "Tiger Gate (Wagh Darwaja) is a strategically located secondary gateway on Raigad Fort. Hidden from direct view and protected by the surrounding terrain, it served as an emergency escape route and strengthened the fort's defensive system."
  },
  {
    id: 45, title: "Kushawart Tank",
    x: 39.65, y: 56.25,
    description: "Kushawart Tank is a historic rock-cut reservoir on Raigad Fort that formed part of the fort's advanced rainwater harvesting system. It supplied fresh water to the nearby residential and administrative areas throughout the year."
  },
  {
    id: 46, title: "Wadeshwar Mahadev Temple",
    x: 38.47, y: 55.94,
    description: "Wadeshwar Mahadev Temple is an ancient shrine dedicated to Lord Shiva located within the Raigad Fort complex. It served as a place of worship for the fort's residents and reflects the religious life of the Maratha capital."
  },
  {
    id: 47, title: "Mena Darwaja",
    x: 31.94, y: 56.04,
    description: "Mena Darwaja was a private gateway leading to the royal residential quarters. It was traditionally used by the queens and women of the royal household, providing secure and secluded access to the palace complex."
  },
  {
    id: 48, title: "Rope-Way",
    x: 32.71, y: 61.48,
    description: "The Raigad Ropeway is a modern cable car system that provides quick access to the fort from its base. Inaugurated in 1996, it has made the historic hill fort more accessible to visitors, pilgrims, and senior citizens."
  },
  {
    id: 49, title: "Potalya Mountain",
    x: 47.64, y: 95.46,
    description: "Potalya Mountain is a prominent hill located south of Raigad Fort. It forms part of the natural landscape surrounding the fort and offers panoramic views of the Sahyadri ranges and the fort's imposing cliffs."
  }
];
const incomplete = [
  { id: 8, title: "Mashid Morcha", x: 35.13, y: 39, description: "This is Description" },


  { id: 12, title: "Iron Pole", x: 35.13, y: 39, description: "This is Description" },

  { id: 23, title: "KhasBaug", x: 35.13, y: 39, description: "This is Description" },
  { id: 25, title: "Granary", x: 35.13, y: 39, description: "This is Description" },


  { id: 32, title: "Storage of Arms & Armours", x: 35.13, y: 39, description: "This is Description" },
  { id: 33, title: "Nisani Cave", x: 35.13, y: 39, description: "This is Description" },

  { id: 38, title: "Cantonments", x: 35.13, y: 39, description: "This is Description" },
  { id: 39, title: "Kala Haud", x: 35.13, y: 39, description: "This is Description" },
  { id: 40, title: "Bhavani Tank", x: 35.13, y: 39, description: "This is Description" },
  { id: 41, title: "Bhavani Kada", x: 79.17, y: 55.33, description: "This is Description" },
  { id: 42, title: "Bara Taki", x: 35.13, y: 39, description: "This is Description" },
  { id: 43, title: "Granary 2", x: 35.13, y: 39, description: "This is Description" },
];
const page = () => {
  let testurl = "/FortmapImages/_01_Raigad_screenshot.png";
  const [showbutton, setShowbutton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowbutton(window.scrollY > 600);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])


  return (
    <main className="bg-stone-100">

      {/* Hero */}
      <section className="relative h-[45vh] overflow-hidden">

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-5">
            <p className="uppercase tracking-[4px] text-sm text-amber-300">Maharashtra {'•'} India</p>

            <h1 className="text-5xl md:text-6xl font-bold mt-3">
              Raigad Fort
            </h1>

            <p className="max-w-2xl mx-auto mt-5 text-lg text-gray-200">
              Explore the capital of the Maratha Empire through an
              interactive map containing historical landmarks, gates,
              caves, reservoirs and defensive structures.
            </p>
          </div>
        </div>
      </section>


      {/* Blog Content */}
      <article className="max-w-6xl mx-auto px-1 lg:px-6 py-14">

        {/* Intro */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-800">Explore Raigad Interactively</h2>

          <p className="mt-5 text-gray-700 leading-8">
            Instead of reading through long lists of historical locations,
            simply hover or tap on the markers shown on the map below.
            Every marker reveals important information about that place,
            making it much easier to understand the layout of the fort.
          </p>
        </section>


        {/* Interactive Map */}
        <section id='fort-map' className="mt-16">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-3xl font-bold w-full">Interactive Fort Map</h2>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl bg-white ">
            <FortMap
              imageurl={testurl}
              dataset={markers}
              size={150}
            />
          </div>
        </section>


        {/* About Map */}
        <section className="mt-16 bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold">About this Interactive Map</h2>

          <p className="mt-4 leading-8 text-gray-700">
            The map contains historically significant locations across
            Raigad Fort. Each marker represents an important structure
            such as gateways, caves, reservoirs, bastions, and mountain
            passes. Hover over or tap a marker to learn about its
            historical importance.
          </p>

        </section>


        {/* Places Grid */}

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Explore the Locations</h2>

          <div className="space-y-6">
            {markers.map((marker, index) => (
              <div
                id={`${marker.id}` + marker.title.trim().replaceAll(" ", "_")}
                key={marker.id}
                className="bg-white rounded-2xl shadow-md p-6 border border-stone-200"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <h3 className="text-2xl font-semibold">
                    {marker.title}
                  </h3>
                </div>

                <p className="text-gray-700 leading-8">
                  {marker.description}
                </p>
              </div>
            ))}
          </div>
        </section>


        {/* History */}

        <section className="mt-20">

          <h2 className="text-3xl font-bold">History of Raigad Fort</h2>

          <p className="mt-5 leading-8 text-gray-700">
            Raigad Fort served as the capital of Chhatrapati Shivaji
            Maharaj's kingdom and remains one of the most significant
            forts in Indian history. Situated in the Sahyadri mountain
            range, the fort was designed with multiple layers of defense,
            strategically placed gateways, reservoirs, caves, and
            bastions that made it extremely difficult to capture.
          </p>

        </section>


        {/* Trek Information */}

        <section className="mt-16 grid md:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Trek Difficulty</h3>

            <p className="leading-7 text-gray-700">
              Moderate. The traditional trekking route passes through
              Chitta Darwaja, Khubladha Buruj and finally reaches Maha
              Darwaja.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Best Time to Visit</h3>

            <p className="leading-7 text-gray-700">
              October to February offers pleasant weather. Monsoon
              provides spectacular scenery but the trails become
              slippery.
            </p>
          </div>

        </section>

      </article>

      <div
        style={{ visibility: showbutton ? "visible" : "hidden" }}
        className="fixed bottom-0 right-0 p-4">
        <button
          onClick={() => {
            document.getElementById("fort-map")?.scrollIntoView({ behavior: "smooth", block: "start" })
          }}
          className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer active:scale-95">
          <ArrowUp />
        </button>
      </div>
    </main>
  );
}

export default page