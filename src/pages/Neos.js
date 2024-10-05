import React from 'react';
import './Neos.css'; // Ensure you have the correct CSS file for styling
import ApophisImage from '../images/Apophis.jpg'; // Correct path to your Apophis image
import ErosImage from '../images/Eros.jpg'; // Correct path to your Eros image
import BennuImage from '../images/Bennu.jpg'; // Correct path to your Bennu image
import DAImage from '../images/DAImage.jpg';
import ItokawaImage from '../images/ItokawaImage.jpg';
import GanymedImage from '../images/GanymedImage.jpg';
import MidasImage from '../images/MidasImage.jpg';
import ToutatisImage from '../images/ToutatisImage.jpg';
import JAImage from '../images/JAImage.jpg';
import PhaethonImage from '../images/PhaethonImage.jpg';


const Neos = () => {
  return (
    <div className="neos-container">
      <h1>Near Earth Objects (NEOs)</h1>

      <section className="neos-section">
        <h2>Introduction to NEOs</h2>
        <p>Near-Earth Objects (NEOs) are asteroids and comets that come close to Earth in their orbits around the Sun. They are categorized based on their proximity to Earth, with the potential to pass through Earth's neighborhood within a certain distance.
          <br></br>

Here’s a breakdown of NEOs and their significance:<br></br>
<h3>1. Types of NEOs </h3><br></br>
<ul>
     <li> <b>Near-Earth Asteroids (NEAs) : </b> These are rocky objects, often remnants from the formation of the Solar System. They are the most common type of NEOs.</li>
     <li><b>Amor group :</b> Asteroids that approach Earth but do not cross its orbit.</li>
     <li><b>Apollo group : </b>Asteroids that cross Earth’s orbit, with larger orbits around the Sun.</li>
     <li><b>Aten group : </b>Asteroids that also cross Earth’s orbit but have smaller orbits than Apollo group.</li>
     <li><b>Near-Earth Comets (NECs) :</b> Comets are icy bodies that develop tails when they approach the Sun, but only a small number of NEOs are comets.</li>
</ul>
<h3>2. Why are NEOs Important?</h3><br></br>
    <ul>
    <li><b>Potential Hazard : </b>Some NEOs have orbits that bring them close to Earth, posing a potential risk for impact. These are classified as **Potentially Hazardous Objects (PHOs)** if they come within 0.05 astronomical units (about 7.5 million kilometers) of Earth and are large enough (over 140 meters in diameter) to cause significant damage.</li>
    <li><b>Scientific Insight :</b> NEOs are remnants from the early solar system, so studying them provides insights into its formation and evolution.</li>
    <li><b>Resource Opportunities :</b> Some asteroids contain valuable metals and other materials that could be mined in the future.</li>
    <li><b>Deflection Strategies :</b> Monitoring NEOs is important for developing strategies to prevent future potential impacts, such as NASA's **DART mission**, which tested the feasibility of deflecting an asteroid.</li>
    </ul>
<h3>3. Recent and Future Missions</h3>
    <ul>
    <li><b>OSIRIS-REx :</b>NASA’s mission that collected samples from the asteroid Bennu, which is a NEO, and returned them to Earth for study.</li>
    <li><b>NEOWISE :</b> A NASA mission that hunts for NEOs and characterizes their properties using infrared.</li>
    <li><b>DART :</b> NASA’s planetary defense mission aimed at testing whether a spacecraft impact could deflect a potentially hazardous asteroid.</li>
    </ul>

<h3>4. Monitoring NEOs</h3>
    <ul>
    <li>Several space agencies and organizations, such as NASA's **Planetary Defense Coordination Office (PDCO)**, track NEOs and assess their risk of impact. NASA also maintains a **Sentry Risk Table**, which lists potentially hazardous NEOs and estimates their chances of impact.</li>
    </ul>
    NEOs are a key focus in both planetary defense and scientific discovery, and they continue to be closely monitored for potential risks and opportunities for exploration.
        </p>
      </section>
<hr></hr>
      <section className="neos-section">
        <h2>Classification of NEOs</h2>
        <p>
          NEOs are classified into different categories based on their orbits, including Atira, Amor, Apollo, and Aten.
        </p>
      </section>

      <section className="neos-section">
        <h2>Famous Near Earth Objects</h2>

        {/* Apophis Section */}
        <div className="neos-item">
          <img src={ApophisImage} alt="Apophis" className="asteroid-image" />
          <div className="asteroid-info">
            <h3>Apophis Orbital Characteristics</h3>
            <ul>
              <li><strong>Epoch:</strong> 1-Jul-2021 (2459396.5 JD)</li>
              <li><strong>Apapsis:</strong> 1.0993 AU (1.6446×10<sup>8</sup> km)</li>
              <li><strong>Periapsis:</strong> 0.7461 AU (1.1161×10<sup>8</sup> km)</li>
              <li><strong>Semi-major axis:</strong> 0.9227 AU (1.3803×10<sup>8</sup> km)</li>
              <li><strong>Eccentricity:</strong> 0.1914348</li>
              <li><strong>Inclination:</strong> 3.3389°</li>
              <li><strong>Longitude of asc. node:</strong> 203.97°</li>
              <li><strong>Argument of periapsis:</strong> 126.59°</li>
              <li><strong>Orbital period:</strong> 323.735 days</li>
              <li><strong>Avg. orbital speed:</strong> 30.72 km/s</li>
              <b>Fun Fact :Subsequent observations have significantly reduced the threat level, <br></br>
              and it will make a close approach to our planet, coming within 19,000 miles of Earth on April 13, 2029!</b>
            </ul>

            <h3>Apophis Physical Characteristics</h3>
            <ul>
              <li><strong>Mean diameter:</strong> 0.3400 km</li>
              <li><strong>Rotation period (synodic):</strong> 30.400 hours</li>
              <li><strong>Albedo:</strong> 0.230</li>
            </ul>
          </div>
        </div>

        {/* Eros Section */}
        <div className="neos-item">
          <img src={ErosImage} alt="Eros" className="asteroid-image" />
          <div className="asteroid-info">
            <h3>Eros Orbital Characteristics</h3>
            <ul>
              <li><strong>Epoch:</strong> 27-Apr-2021 (2459331.5 JD)</li>
              <li><strong>Apapsis:</strong> 1.783 AU (2.668×10<sup>8</sup> km)</li>
              <li><strong>Periapsis:</strong> 1.133 AU (1.695×10<sup>8</sup> km)</li>
              <li><strong>Semi-major axis:</strong> 1.458 AU (2.181×10<sup>8</sup> km)</li>
              <li><strong>Eccentricity:</strong> 0.2229</li>
              <li><strong>Inclination:</strong> 10.829°</li>
              <li><strong>Longitude of asc. node:</strong> 304.294°</li>
              <li><strong>Argument of periapsis:</strong> 178.9°</li>
              <li><strong>Orbital period:</strong> 643.219 days</li>
              <li><strong>Avg. orbital speed:</strong> 24.36 km/s</li>
              <b>Fun Fact : t was the first asteroid to be orbited and landed on by a spacecraft, <br></br>
              when NASA's NEAR Shoemaker mission achieved a soft landing on its surface in 2001!</b>
            </ul>

            <h3>Eros Physical Characteristics</h3>
            <ul>
              <li><strong>Mean diameter:</strong> 16.84 km</li>
              <li><strong>Rotation period (synodic):</strong> 5.270 hours</li>
              <li><strong>Albedo:</strong> 0.25</li>
            </ul>
          </div>
        </div>

        {/* Bennu Section */}
        <div className="neos-item">
          <img src={BennuImage} alt="Bennu" className="asteroid-image" />
          <div className="asteroid-info">
            <h3>Bennu Orbital Characteristics</h3>
            <ul>
              <li><strong>Epoch:</strong> 31-Jul-2021 (2459396.5 JD)</li>
              <li><strong>Apapsis:</strong> 1.355 AU (2.027×10<sup>8</sup> km)</li>
              <li><strong>Periapsis:</strong> 0.897 AU (1.342×10<sup>8</sup> km)</li>
              <li><strong>Semi-major axis:</strong> 1.126 AU (1.685×10<sup>8</sup> km)</li>
              <li><strong>Eccentricity:</strong> 0.2037</li>
              <li><strong>Inclination:</strong> 6.034°</li>
              <li><strong>Longitude of asc. node:</strong> 2.060°</li>
              <li><strong>Argument of periapsis:</strong> 66.223°</li>
              <li><strong>Orbital period:</strong> 436.604 days</li>
              <li><strong>Avg. orbital speed:</strong> 28.68 km/s</li>
              <b>Fun Fact : It's famous for being the target of NASA's OSIRIS-REx mission, <br></br>
                which successfully collected samples from Bennu's surface and returned them to Earth in 2023!
              </b>
            </ul>

            <h3>Bennu Physical Characteristics</h3>
            <ul>
              <li><strong>Mean diameter:</strong> 0.490 km</li>
              <li><strong>Rotation period (synodic):</strong> 4.296 hours</li>
              <li><strong>Albedo:</strong> 0.045</li>
            </ul>
          </div>
        </div>

         {/* 1950 DA Section */}
  <div className="neos-item">
    <img src={DAImage} alt="1950 DA" className="asteroid-image" />
    <div className="asteroid-info">
      <h3>1950 DA Orbital Characteristics</h3>
      <ul>
        <li><strong>Epoch:</strong> 31-Jul-2021 (2459396.5 JD)</li>
        <li><strong>Apapsis:</strong> 1.704 AU (2.549×10<sup>8</sup> km)</li>
        <li><strong>Periapsis:</strong> 0.837 AU (1.252×10<sup>8</sup> km)</li>
        <li><strong>Semi-major axis:</strong> 1.270 AU (1.901×10<sup>8</sup> km)</li>
        <li><strong>Eccentricity:</strong> 0.341</li>
        <li><strong>Inclination:</strong> 12.2°</li>
        <li><strong>Longitude of asc. node:</strong> 352.6°</li>
        <li><strong>Argument of periapsis:</strong> 245.6°</li>
        <li><strong>Orbital period:</strong> 512.6 days</li>
        <li><strong>Avg. orbital speed:</strong> 24.86 km/s</li>
        <b>Fun Fact : 1950 DA is a potentially hazardous asteroid with an orbit that brings it close to Earth,<br></br>
        completing one revolution around the Sun every 2.20 years.</b>
      </ul>

      <h3>1950 DA Physical Characteristics</h3>
      <ul>
        <li><strong>Mean diameter:</strong> 1.3 km</li>
        <li><strong>Rotation period (synodic):</strong> 2.121 hours</li>
        <li><strong>Albedo:</strong> 0.2</li>
      </ul>
    </div>
  </div>
    
      {/* Itokawa Section */}
  <div className="neos-item">
    <img src={ItokawaImage} alt="Itokawa" className="asteroid-image" />
    <div className="asteroid-info">
      <h3>Itokawa Orbital Characteristics</h3>
      <ul>
        <li><strong>Epoch:</strong> 27-Apr-2021 (2459331.5 JD)</li>
        <li><strong>Apapsis:</strong> 1.695 AU (2.537×10<sup>8</sup> km)</li>
        <li><strong>Periapsis:</strong> 0.953 AU (1.426×10<sup>8</sup> km)</li>
        <li><strong>Semi-major axis:</strong> 1.324 AU (1.981×10<sup>8</sup> km)</li>
        <li><strong>Eccentricity:</strong> 0.2804</li>
        <li><strong>Inclination:</strong> 1.621°</li>
        <li><strong>Longitude of asc. node:</strong> 24.496°</li>
        <li><strong>Argument of periapsis:</strong> 162.85°</li>
        <li><strong>Orbital period:</strong> 556.389 days</li>
        <li><strong>Avg. orbital speed:</strong> 28.23 km/s</li>
        <b>Fun Fact : Its unusual orbit crosses both Earth's and Mars' orbits, <br></br>
          making it a Near-Earth Object (NEO) and an exciting target for space exploration!</b>
      </ul>

      <h3>Itokawa Physical Characteristics</h3>
      <ul>
        <li><strong>Mean diameter:</strong> 0.330 km</li>
        <li><strong>Rotation period (synodic):</strong> 12.132 hours</li>
        <li><strong>Albedo:</strong> 0.29</li>
      </ul>
    </div>
  </div>

      
      {/* Ganymed Section */}
  <div className="neos-item">
    <img src={GanymedImage} alt="Ganymed" className="asteroid-image" />
    <div className="asteroid-info">
      <h3>Ganymed Orbital Characteristics</h3>
      
      <ul>
        <li><strong>Epoch:</strong> 27-Apr-2021 (2459331.5 JD)</li>
        <li><strong>Apapsis:</strong> 4.092 AU (6.119×10<sup>8</sup> km)</li>
        <li><strong>Periapsis:</strong> 1.245 AU (1.863×10<sup>8</sup> km)</li>
        <li><strong>Semi-major axis:</strong> 2.668 AU (3.991×10<sup>8</sup> km)</li>
        <li><strong>Eccentricity:</strong> 0.5322</li>
        <li><strong>Inclination:</strong> 26.693°</li>
        <li><strong>Longitude of asc. node:</strong> 124.36°</li>
        <li><strong>Argument of periapsis:</strong> 104.12°</li>
        <li><strong>Orbital period:</strong> 1,506.565 days</li>
        <li><strong>Avg. orbital speed:</strong> 14.52 km/s</li>
        
        <b>Fun Fact: Ganymed is the largest NEO, much larger than Apophis or Bennu, <br></br>
          making it a prominent subject for study, though it poses no current threat to Earth.</b>
      </ul>

      <h3>Ganymed Physical Characteristics</h3>
      
      <ul>
        <li><strong>Mean diameter:</strong> 32.12 km</li>
        <li><strong>Rotation period (synodic):</strong> 10.313 hours</li>
        <li><strong>Albedo:</strong> 0.25</li>
      </ul>
    </div>
  </div>
         
      {/* 1981 Midas Section */}
  <div className="neos-item">
    <img src={MidasImage} alt="1981 Midas" className="asteroid-image" />
    <div className="asteroid-info">
      <h3>1981 Midas Orbital Characteristics</h3>
      <ul>
        <li><strong>Epoch:</strong> 31-Jul-2021 (2459396.5 JD)</li>
        <li><strong>Apapsis:</strong> 2.834 AU (4.238×10<sup>8</sup> km)</li>
        <li><strong>Periapsis:</strong> 0.623 AU (9.321×10<sup>7</sup> km)</li>
        <li><strong>Semi-major axis:</strong> 1.729 AU (2.587×10<sup>8</sup> km)</li>
        <li><strong>Eccentricity:</strong> 0.6393</li>
        <li><strong>Inclination:</strong> 39.837°</li>
        <li><strong>Longitude of asc. node:</strong> 186.46°</li>
        <li><strong>Argument of periapsis:</strong> 115.94°</li>
        <li><strong>Orbital period:</strong> 842.801 days</li>
        <li><strong>Avg. orbital speed:</strong> 22.63 km/s</li>
        <b>Fun Fact : Its orbit brings it close to Earth, and it was discovered in 1981, <br></br>
        adding to the growing catalog of asteroids that scientists study for their potential impact risk!</b>
      </ul>

      <h3>1981 Midas Physical Characteristics</h3>
      <ul>
        <li><strong>Mean diameter:</strong> 2.2 km</li>
        <li><strong>Rotation period (synodic):</strong> 5.22 hours</li>
        <li><strong>Albedo:</strong> 0.10</li>
      </ul>
    </div>
  </div>

    {/* Toutatis Section */}
  <div className="neos-item">
    <img src={ToutatisImage} alt="Toutatis" className="asteroid-image" />
    <div className="asteroid-info">
      <h3>Toutatis Orbital Characteristics</h3>
      <ul>
        <li><strong>Epoch:</strong> 27-Apr-2021 (2459331.5 JD)</li>
        <li><strong>Apapsis:</strong> 3.144 AU (4.704×10<sup>8</sup> km)</li>
        <li><strong>Periapsis:</strong> 0.936 AU (1.400×10<sup>8</sup> km)</li>
        <li><strong>Semi-major axis:</strong> 2.040 AU (3.052×10<sup>8</sup> km)</li>
        <li><strong>Eccentricity:</strong> 0.5418</li>
        <li><strong>Inclination:</strong> 0.449°</li>
        <li><strong>Longitude of asc. node:</strong> 273.198°</li>
        <li><strong>Argument of periapsis:</strong> 274.68°</li>
        <li><strong>Orbital period:</strong> 1,276.568 days</li>
        <li><strong>Avg. orbital speed:</strong> 16.74 km/s</li>
        <b>Fun Fact : Toutatis is a large near-Earth asteroid with a unique, <br></br>
        irregular shape and an orbital period of approximately 4.04 years, <br></br>
        making close approaches to Earth every few years.
</b>
      </ul>

      <h3>Toutatis Physical Characteristics</h3>
      <ul>
        <li><strong>Mean diameter:</strong> 2.8 km</li>
        <li><strong>Rotation period (synodic):</strong> 7.372 hours</li>
        <li><strong>Albedo:</strong> 0.13</li>
      </ul>
    </div>
  </div>

     {/* 1989 JA Section */}
  <div className="neos-item">
    <img src={JAImage} alt="1989 JA" className="asteroid-image" />
    <div className="asteroid-info">
      <h3>1989 JA Orbital Characteristics</h3>
      <ul>
        <li><strong>Epoch:</strong> 31-Jul-2021 (2459396.5 JD)</li>
        <li><strong>Apapsis:</strong> 1.929 AU (2.887×10<sup>8</sup> km)</li>
        <li><strong>Periapsis:</strong> 0.869 AU (1.300×10<sup>8</sup> km)</li>
        <li><strong>Semi-major axis:</strong> 1.399 AU (2.092×10<sup>8</sup> km)</li>
        <li><strong>Eccentricity:</strong> 0.379</li>
        <li><strong>Inclination:</strong> 15.551°</li>
        <li><strong>Longitude of asc. node:</strong> 80.024°</li>
        <li><strong>Argument of periapsis:</strong> 35.16°</li>
        <li><strong>Orbital period:</strong> 598.346 days</li>
        <li><strong>Avg. orbital speed:</strong> 25.12 km/s</li>
        <b>Fun Fact : 1989 JA is a near-Earth asteroid with a relatively short orbital period of about 1.25 years, <br></br>
        allowing it to make frequent close approaches to our planet.</b>
      </ul>

      <h3>1989 JA Physical Characteristics</h3>
      <ul>
        <li><strong>Mean diameter:</strong> 1.8 km</li>
        <li><strong>Rotation period (synodic):</strong> 12.58 hours</li>
        <li><strong>Albedo:</strong> 0.09</li>
      </ul>
    </div>
  </div>

      {/* Phaethon Section */}
  <div className="neos-item">
    <img src={PhaethonImage} alt="Phaethon" className="asteroid-image" />
    <div className="asteroid-info">
      <h3>Phaethon Orbital Characteristics</h3>
      <ul>
        <li><strong>Epoch:</strong> 31-Jul-2021 (2459396.5 JD)</li>
        <li><strong>Apapsis:</strong> 2.404 AU (3.597×10<sup>8</sup> km)</li>
        <li><strong>Periapsis:</strong> 0.140 AU (2.095×10<sup>7</sup> km)</li>
        <li><strong>Semi-major axis:</strong> 1.271 AU (1.901×10<sup>8</sup> km)</li>
        <li><strong>Eccentricity:</strong> 0.889</li>
        <li><strong>Inclination:</strong> 22.216°</li>
        <li><strong>Longitude of asc. node:</strong> 265.27°</li>
        <li><strong>Argument of periapsis:</strong> 322.22°</li>
        <li><strong>Orbital period:</strong> 524.619 days</li>
        <li><strong>Avg. orbital speed:</strong> 30.76 km/s</li>
        <b>Fun Fact : Phaethon is a unique near-Earth asteroid with an orbital period of about 1.43 years and <br></br>
        is often considered the parent body of the Geminid meteor shower that occurs annually in December.</b>
      </ul>

      <h3>Phaethon Physical Characteristics</h3>
      <ul>
        <li><strong>Mean diameter:</strong> 5.8 km</li>
        <li><strong>Rotation period (synodic):</strong> 3.604 hours</li>
        <li><strong>Albedo:</strong> 0.11</li>
      </ul>
    </div>
  </div>

      </section>

      <section className="neos-section">
        <h2>Potential Threats</h2>
        <p>
          NEOs pose potential risks to Earth, including impacts that could have catastrophic consequences. Historical impacts have significantly affected life on our planet.
        </p>
      </section>

      <section className="neos-section">
        <h2>Monitoring and Tracking NEOs</h2>
        <p>
          Astronomers monitor NEOs using advanced telescopes and radar systems. Organizations like NASA's Planetary Defense Coordination Office work to detect potential threats.
        </p>
      </section>

      <section className="neos-section">
        <h2>Mitigation Strategies</h2>
        <p>
          Strategies such as deflection missions and evacuation plans are being researched to prevent potential impacts from NEOs.
        </p>
      </section>

      <section className="neos-section">
        <h2>Fun Facts</h2>
        <ul>
          <li>There are over 28,000 known NEOs.</li>
          <li>The largest known NEO is 1036 Ganymed, with a diameter of 32 kilometers.</li>
          <li>Fictional NEOs like the asteroid in *Armageddon* have appeared in popular culture.</li>
        </ul>
      </section>
    </div>
  );
};

export default Neos;