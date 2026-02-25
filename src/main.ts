import './style.css';
import Globe from 'globe.gl';

const globeContainer = document.getElementById('globeViz');

if (globeContainer) {
  const world = Globe()(globeContainer)
    .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
    .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png');

  // Set the point of view to a typical starting location (Europe)
  world.pointOfView({ lat: 48.8566, lng: 2.3522, altitude: 2 });

  // ── Radio station clusters with live stream URLs ──
  const clusters = [
    // ── North America ──
    { name: 'New York (WNYC)', lat: 40.7128, lng: -74.006, count: 50, url: 'https://fm939.wnyc.org/wnycfm' },
    { name: 'Los Angeles (KEXP)', lat: 34.0522, lng: -118.2437, count: 45, url: 'https://kexp-mp3-128.streamguys1.com/kexp128.mp3' },
    { name: 'Chicago (PopTron)', lat: 41.8781, lng: -87.6298, count: 30, url: 'https://ice1.somafm.com/poptron-128-mp3' },
    { name: 'San Francisco (Groove Salad)', lat: 37.7749, lng: -122.4194, count: 60, url: 'https://ice1.somafm.com/groovesalad-256-mp3' },
    { name: 'Toronto (Indie Pop Rocks!)', lat: 43.6532, lng: -79.3832, count: 28, url: 'https://ice1.somafm.com/indiepop-128-mp3' },
    { name: 'Mexico City (Fluid)', lat: 19.4326, lng: -99.1332, count: 38, url: 'https://ice1.somafm.com/fluid-128-mp3' },
    { name: 'Miami (DEF CON Radio)', lat: 25.7617, lng: -80.1918, count: 22, url: 'https://ice1.somafm.com/defcon-256-mp3' },
    { name: 'Seattle (Left Coast 70s)', lat: 47.6062, lng: -122.3321, count: 18, url: 'https://ice1.somafm.com/seventies-128-mp3' },
    { name: 'Denver (Boot Liquor)', lat: 39.7392, lng: -104.9903, count: 15, url: 'https://ice1.somafm.com/bootliquor-128-mp3' },
    { name: 'Atlanta (Underground 80s)', lat: 33.749, lng: -84.388, count: 20, url: 'https://ice1.somafm.com/u80s-128-mp3' },
    { name: 'Vancouver (Lush)', lat: 49.2827, lng: -123.1207, count: 16, url: 'https://ice1.somafm.com/lush-128-mp3' },
    { name: 'Havana (Bossa Beyond)', lat: 23.1136, lng: -82.3666, count: 12, url: 'https://ice1.somafm.com/bossa-128-mp3' },
    { name: 'Houston (Doomed)', lat: 29.7604, lng: -95.3698, count: 14, url: 'https://ice1.somafm.com/doomed-128-mp3' },
    { name: 'Boston (ThistleRadio)', lat: 42.3601, lng: -71.0589, count: 18, url: 'https://ice1.somafm.com/thistle-128-mp3' },
    { name: 'Phoenix (Metal Detector)', lat: 33.4484, lng: -112.074, count: 12, url: 'https://ice1.somafm.com/metal-128-mp3' },
    { name: 'Minneapolis (Synphaera)', lat: 44.9778, lng: -93.265, count: 10, url: 'https://ice1.somafm.com/synphaera-128-mp3' },
    { name: 'Montreal (Groove Salad Classic)', lat: 45.5017, lng: -73.5673, count: 22, url: 'https://ice1.somafm.com/gsclassic-128-mp3' },
    { name: 'San Diego (Space Station)', lat: 32.7157, lng: -117.1611, count: 12, url: 'https://ice1.somafm.com/spacestation-128-mp3' },
    { name: 'Guatemala City (Reggae)', lat: 14.6349, lng: -90.5069, count: 8, url: 'https://ice1.somafm.com/reggae-128-mp3' },
    { name: 'San José (Folk Forward)', lat: 9.9281, lng: -84.0907, count: 8, url: 'https://ice1.somafm.com/folkfwd-128-mp3' },

    // ── South America ──
    { name: 'São Paulo (Secret Agent)', lat: -23.5505, lng: -46.6333, count: 35, url: 'https://ice1.somafm.com/secretagent-256-mp3' },
    { name: 'Buenos Aires (Seven Inch Soul)', lat: -34.6037, lng: -58.3816, count: 25, url: 'https://ice1.somafm.com/7soul-128-mp3' },
    { name: 'Lima (Sonic Universe)', lat: -12.0464, lng: -77.0428, count: 15, url: 'https://ice1.somafm.com/sonicuniverse-128-mp3' },
    { name: 'Bogotá (Folk Forward)', lat: 4.711, lng: -74.0721, count: 12, url: 'https://ice1.somafm.com/folkfwd-128-mp3' },
    { name: 'Santiago (Digitalis)', lat: -33.4489, lng: -70.6693, count: 14, url: 'https://ice1.somafm.com/digitalis-128-mp3' },
    { name: 'Rio de Janeiro (Suburbs of Goa)', lat: -22.9068, lng: -43.1729, count: 20, url: 'https://ice1.somafm.com/suburbsofgoa-128-mp3' },
    { name: 'Quito (Bossa Beyond)', lat: -0.1807, lng: -78.4678, count: 8, url: 'https://ice1.somafm.com/bossa-128-mp3' },
    { name: 'Caracas (Lush)', lat: 10.4806, lng: -66.9036, count: 10, url: 'https://ice1.somafm.com/lush-128-mp3' },
    { name: 'Montevideo (Indie Pop)', lat: -34.9011, lng: -56.1645, count: 10, url: 'https://ice1.somafm.com/indiepop-128-mp3' },

    // ── Europe ──
    { name: 'London (BBC World Service)', lat: 51.5074, lng: -0.1278, count: 90, url: 'https://stream.live.vc.bbcmedia.co.uk/bbc_world_service' },
    { name: 'Paris (DEF CON Radio)', lat: 48.8566, lng: 2.3522, count: 55, url: 'https://ice1.somafm.com/defcon-256-mp3' },
    { name: 'Berlin (Metal Detector)', lat: 52.52, lng: 13.405, count: 45, url: 'https://ice1.somafm.com/metal-128-mp3' },
    { name: 'Amsterdam (Deep Space One)', lat: 52.3676, lng: 4.9041, count: 30, url: 'https://ice1.somafm.com/deepspaceone-128-mp3' },
    { name: 'Madrid (Covers)', lat: 40.4168, lng: -3.7038, count: 28, url: 'https://ice1.somafm.com/covers-128-mp3' },
    { name: 'Rome (Illinois Street Lounge)', lat: 41.9028, lng: 12.4964, count: 25, url: 'https://ice1.somafm.com/illstreet-128-mp3' },
    { name: 'Istanbul (Beat Blender)', lat: 41.0082, lng: 28.9784, count: 42, url: 'https://ice1.somafm.com/beatblender-128-mp3' },
    { name: 'Moscow (Mission Control)', lat: 55.7558, lng: 37.6173, count: 40, url: 'https://ice1.somafm.com/missioncontrol-128-mp3' },
    { name: 'Stockholm (Drone Zone)', lat: 59.3293, lng: 18.0686, count: 18, url: 'https://ice1.somafm.com/dronezone-256-mp3' },
    { name: 'Prague (Synphaera Radio)', lat: 50.0755, lng: 14.4378, count: 16, url: 'https://ice1.somafm.com/synphaera-128-mp3' },
    { name: 'Dublin (ThistleRadio Celtic)', lat: 53.3498, lng: -6.2603, count: 20, url: 'https://ice1.somafm.com/thistle-128-mp3' },
    { name: 'Vienna (Baroque)', lat: 48.2082, lng: 16.3738, count: 22, url: 'https://ice1.somafm.com/baroque-128-mp3' },
    { name: 'Lisbon (Bossa Nova)', lat: 38.7223, lng: -9.1393, count: 18, url: 'https://ice1.somafm.com/bossa-128-mp3' },
    { name: 'Warsaw (Vaporwaves)', lat: 52.2297, lng: 21.0122, count: 14, url: 'https://ice1.somafm.com/vaporwaves-128-mp3' },
    { name: 'Athens (Groove Salad Classic)', lat: 37.9838, lng: 23.7275, count: 16, url: 'https://ice1.somafm.com/gsclassic-128-mp3' },
    { name: 'Helsinki (Space Station Soma)', lat: 60.1699, lng: 24.9384, count: 12, url: 'https://ice1.somafm.com/spacestation-128-mp3' },
    { name: 'Bucharest (Cliqhop)', lat: 44.4268, lng: 26.1025, count: 14, url: 'https://ice1.somafm.com/cliqhop-128-mp3' },
    { name: 'Oslo (n5MD Radio)', lat: 59.9139, lng: 10.7522, count: 10, url: 'https://ice1.somafm.com/n5md-128-mp3' },
    { name: 'Copenhagen (Fluid)', lat: 55.6761, lng: 12.5683, count: 14, url: 'https://ice1.somafm.com/fluid-128-mp3' },
    { name: 'Zurich (Groove Salad)', lat: 47.3769, lng: 8.5417, count: 16, url: 'https://ice1.somafm.com/groovesalad-256-mp3' },
    { name: 'Barcelona (Sonic Universe)', lat: 41.3874, lng: 2.1686, count: 20, url: 'https://ice1.somafm.com/sonicuniverse-128-mp3' },
    { name: 'Milan (Secret Agent)', lat: 45.4642, lng: 9.19, count: 18, url: 'https://ice1.somafm.com/secretagent-256-mp3' },
    { name: 'Brussels (Left Coast 70s)', lat: 50.8503, lng: 4.3517, count: 12, url: 'https://ice1.somafm.com/seventies-128-mp3' },
    { name: 'Kyiv (Underground 80s)', lat: 50.4501, lng: 30.5234, count: 16, url: 'https://ice1.somafm.com/u80s-128-mp3' },
    { name: 'Budapest (Doomed)', lat: 47.4979, lng: 19.0402, count: 12, url: 'https://ice1.somafm.com/doomed-128-mp3' },
    { name: 'Edinburgh (ThistleRadio)', lat: 55.9533, lng: -3.1883, count: 14, url: 'https://ice1.somafm.com/thistle-128-mp3' },

    // ── Africa ──
    { name: 'Lagos (Groove Salad)', lat: 6.5244, lng: 3.3792, count: 22, url: 'https://ice1.somafm.com/groovesalad-256-mp3' },
    { name: 'Cairo (Suburbs of Goa)', lat: 30.0444, lng: 31.2357, count: 28, url: 'https://ice1.somafm.com/suburbsofgoa-128-mp3' },
    { name: 'Nairobi (Reggae)', lat: -1.2921, lng: 36.8219, count: 18, url: 'https://ice1.somafm.com/reggae-128-mp3' },
    { name: 'Johannesburg (Sonic Universe)', lat: -26.2041, lng: 28.0473, count: 20, url: 'https://ice1.somafm.com/sonicuniverse-128-mp3' },
    { name: 'Casablanca (Lush)', lat: 33.5731, lng: -7.5898, count: 15, url: 'https://ice1.somafm.com/lush-128-mp3' },
    { name: 'Accra (Seven Inch Soul)', lat: 5.6037, lng: -0.187, count: 12, url: 'https://ice1.somafm.com/7soul-128-mp3' },
    { name: 'Addis Ababa (Folk Forward)', lat: 9.025, lng: 38.7469, count: 10, url: 'https://ice1.somafm.com/folkfwd-128-mp3' },
    { name: 'Dakar (Bossa Beyond)', lat: 14.7167, lng: -17.4677, count: 8, url: 'https://ice1.somafm.com/bossa-128-mp3' },
    { name: 'Dar es Salaam (Beat Blender)', lat: -6.7924, lng: 39.2083, count: 10, url: 'https://ice1.somafm.com/beatblender-128-mp3' },
    { name: 'Cape Town (Indie Pop)', lat: -33.9249, lng: 18.4241, count: 14, url: 'https://ice1.somafm.com/indiepop-128-mp3' },
    { name: 'Tunis (Deep Space One)', lat: 36.8065, lng: 10.1815, count: 10, url: 'https://ice1.somafm.com/deepspaceone-128-mp3' },
    { name: 'Algiers (Covers)', lat: 36.7538, lng: 3.0588, count: 10, url: 'https://ice1.somafm.com/covers-128-mp3' },

    // ── Asia ──
    { name: 'Tokyo (Groove Salad)', lat: 35.6762, lng: 139.6503, count: 120, url: 'https://ice1.somafm.com/groovesalad-256-mp3' },
    { name: 'Mumbai (Suburbs of Goa)', lat: 19.076, lng: 72.8777, count: 55, url: 'https://ice1.somafm.com/suburbsofgoa-128-mp3' },
    { name: 'Singapore (Beat Blender)', lat: 1.3521, lng: 103.8198, count: 45, url: 'https://ice1.somafm.com/beatblender-128-mp3' },
    { name: 'Seoul (PopTron)', lat: 37.5665, lng: 126.978, count: 50, url: 'https://ice1.somafm.com/poptron-128-mp3' },
    { name: 'Beijing (Deep Space One)', lat: 39.9042, lng: 116.4074, count: 60, url: 'https://ice1.somafm.com/deepspaceone-128-mp3' },
    { name: 'Bangkok (Lush)', lat: 13.7563, lng: 100.5018, count: 22, url: 'https://ice1.somafm.com/lush-128-mp3' },
    { name: 'Dubai (Secret Agent)', lat: 25.2048, lng: 55.2708, count: 30, url: 'https://ice1.somafm.com/secretagent-256-mp3' },
    { name: 'Delhi (Digitalis)', lat: 28.6139, lng: 77.209, count: 40, url: 'https://ice1.somafm.com/digitalis-128-mp3' },
    { name: 'Jakarta (Fluid)', lat: -6.2088, lng: 106.8456, count: 25, url: 'https://ice1.somafm.com/fluid-128-mp3' },
    { name: 'Manila (Underground 80s)', lat: 14.5995, lng: 120.9842, count: 20, url: 'https://ice1.somafm.com/u80s-128-mp3' },
    { name: 'Taipei (Vaporwaves)', lat: 25.033, lng: 121.5654, count: 25, url: 'https://ice1.somafm.com/vaporwaves-128-mp3' },
    { name: 'Ho Chi Minh City (Covers)', lat: 10.8231, lng: 106.6297, count: 14, url: 'https://ice1.somafm.com/covers-128-mp3' },
    { name: 'Kuala Lumpur (Baroque)', lat: 3.139, lng: 101.6869, count: 16, url: 'https://ice1.somafm.com/baroque-128-mp3' },
    { name: 'Osaka (Cliqhop)', lat: 34.6937, lng: 135.5023, count: 35, url: 'https://ice1.somafm.com/cliqhop-128-mp3' },
    { name: 'Shanghai (Drone Zone)', lat: 31.2304, lng: 121.4737, count: 50, url: 'https://ice1.somafm.com/dronezone-256-mp3' },
    { name: 'Hong Kong (Groove Salad Classic)', lat: 22.3193, lng: 114.1694, count: 30, url: 'https://ice1.somafm.com/gsclassic-128-mp3' },
    { name: 'Kolkata (Seven Inch Soul)', lat: 22.5726, lng: 88.3639, count: 20, url: 'https://ice1.somafm.com/7soul-128-mp3' },
    { name: 'Karachi (Mission Control)', lat: 24.8607, lng: 67.0011, count: 25, url: 'https://ice1.somafm.com/missioncontrol-128-mp3' },
    { name: 'Dhaka (Digitalis)', lat: 23.8103, lng: 90.4125, count: 18, url: 'https://ice1.somafm.com/digitalis-128-mp3' },
    { name: 'Riyadh (Boot Liquor)', lat: 24.7136, lng: 46.6753, count: 15, url: 'https://ice1.somafm.com/bootliquor-128-mp3' },
    { name: 'Tehran (Sonic Universe)', lat: 35.6892, lng: 51.389, count: 22, url: 'https://ice1.somafm.com/sonicuniverse-128-mp3' },
    { name: 'Tel Aviv (Synphaera)', lat: 32.0853, lng: 34.7818, count: 18, url: 'https://ice1.somafm.com/synphaera-128-mp3' },

    // ── Oceania ──
    { name: 'Sydney (Cliqhop)', lat: -33.8688, lng: 151.2093, count: 30, url: 'https://ice1.somafm.com/cliqhop-128-mp3' },
    { name: 'Melbourne (Metal Detector)', lat: -37.8136, lng: 144.9631, count: 22, url: 'https://ice1.somafm.com/metal-128-mp3' },
    { name: 'Auckland (Drone Zone)', lat: -36.8485, lng: 174.7633, count: 15, url: 'https://ice1.somafm.com/dronezone-256-mp3' },
    { name: 'Perth (Boot Liquor)', lat: -31.9505, lng: 115.8605, count: 12, url: 'https://ice1.somafm.com/bootliquor-128-mp3' },
    { name: 'Brisbane (Lush)', lat: -27.4698, lng: 153.0251, count: 14, url: 'https://ice1.somafm.com/lush-128-mp3' },
    { name: 'Wellington (Folk Forward)', lat: -41.2865, lng: 174.7762, count: 10, url: 'https://ice1.somafm.com/folkfwd-128-mp3' },
  ];

  // ── Audio state ──
  let currentAudio: HTMLAudioElement | null = null;
  let isPlaying = false;
  const stationNameEl = document.getElementById('stationName');
  const pauseBtn = document.getElementById('pauseBtn') as HTMLButtonElement;
  const volumeSlider = document.getElementById('volumeSlider') as HTMLInputElement;
  const nowPlayingEl = document.getElementById('nowPlaying');

  // ── Pause / Play button ──
  pauseBtn.addEventListener('click', () => {
    if (!currentAudio) return;
    if (isPlaying) {
      currentAudio.pause();
      isPlaying = false;
      pauseBtn.textContent = '▶';
      nowPlayingEl?.classList.remove('playing');
    } else {
      currentAudio.play();
      isPlaying = true;
      pauseBtn.textContent = '⏸';
      nowPlayingEl?.classList.add('playing');
    }
  });

  // ── Volume slider ──
  volumeSlider.addEventListener('input', () => {
    if (currentAudio) {
      currentAudio.volume = parseInt(volumeSlider.value) / 100;
    }
  });

  // ── Globe markers ──
  world.htmlElementsData(clusters)
    .htmlElement((d: any) => {
      const el = document.createElement('div');
      const size = Math.max(10, Math.sqrt(d.count) * 2.5);

      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.backgroundColor = '#00ff00';
      el.style.borderRadius = '50%';
      el.style.boxShadow = '0 0 15px 5px rgba(0, 255, 0, 0.7)';
      el.style.cursor = 'pointer';
      el.style.pointerEvents = 'auto';
      el.title = `${d.name} (${d.count} stations)`;

      el.onclick = () => {
        // Zoom
        world.pointOfView({ lat: d.lat, lng: d.lng, altitude: 0.5 }, 1500);

        // Update UI
        if (stationNameEl) stationNameEl.innerText = 'Connecting...';

        // Stop previous audio
        if (currentAudio) {
          currentAudio.pause();
          currentAudio.src = '';
        }

        // Play new stream
        currentAudio = new Audio(d.url);
        currentAudio.crossOrigin = 'anonymous';
        currentAudio.volume = parseInt(volumeSlider.value) / 100;
        currentAudio.play().then(() => {
          isPlaying = true;
          pauseBtn.textContent = '⏸';
          nowPlayingEl?.classList.add('playing');
          if (stationNameEl) stationNameEl.innerText = d.name;
        }).catch((err) => {
          console.error('Audio playback failed:', err);
          isPlaying = false;
          pauseBtn.textContent = '▶';
          nowPlayingEl?.classList.remove('playing');
          if (stationNameEl) stationNameEl.innerText = `${d.name} (Stream Error)`;
        });
      };

      return el;
    });

  // Handle window resize
  window.addEventListener('resize', () => {
    world.width(window.innerWidth).height(window.innerHeight);
  });
}
