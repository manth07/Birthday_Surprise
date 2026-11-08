/**
 * ==============================================================================
 * BIRTHDAY SCRAPBOOK & POLAROID WALL FOR "MY BACHAAAA"
 * ==============================================================================
 * Architecture Rule: Centralized CONFIG object for easy customization.
 * All text, credentials, messages, media paths, compliments, and module data
 * can be modified right here without modifying core logic.
 * ==============================================================================
 */

const CONFIG = {
  // Global & Recipient Details
  recipient: {
    nickname: "My Bachaaaa",
    shortName: "Bachaaaa",
    title: "Made exclusively for My Bachaaaa's Birthday ✨"
  },

  // Security & Passcode (The day everything began - DDMM)
  passcode: "2208",

  // Feedback Messages
  messages: {
    initialPrompt: "Enter our secret 4-digit date to unlock",
    errorHint: "Hmm, not quite! Try again my love 💕",
    successHint: "Unlocked with love! Opening our world... ✨",
    passcodeHint: "Hint: The day everything began and we crossed path for the first time (DDMM)"
  },

  // Color Palette Tokens (Shared with canvas-confetti & dynamic graphics)
  colors: {
    vintageCream: "#FDFBF7",
    blushPink: "#F4ACB7",
    blushPinkDark: "#D98996",
    kraftBrown: "#D8C3A5",
    charcoalInk: "#3A3532",
    fairyGold: "#FFD166",
    goldLight: "#FFF3C4"
  },

  // Confetti Particle Config
  confetti: {
    particleCount: 80,
    spread: 70,
    originY: 0.6,
    colors: ["#FFD166", "#F4ACB7", "#FFF3C4", "#D8C3A5", "#E893A0"]
  },

  // ===========================================================================
  // MODULE DATA RESERVED FOR UPCOMING STEPS (2 THROUGH 8)
  // Edit these anytime as we progress through the build!
  // ===========================================================================

  // STEP 2: Atmosphere & Floating Vinyl Player
  music: {
    // -------------------------------------------------------------------------
    // 🎵 EDIT YOUR MUSIC FILE PATH OR URL HERE:
    // 1. Put your girlfriend's favorite MP3 song file into 'assets/music/our-song.mp3'
    //    (or paste any valid local file path or online HTTPS audio URL here).
    // 2. Change the song title below to her favorite song!
    // -------------------------------------------------------------------------
    src: "assets/music/our-song.mp3",
    title: "Preet Re 🎵",
    autoplayOnUnlock: true
  },

  // STEP 3: Hero Section & Interactive Birthday Cake
  birthdayCake: {
    title: "Happy Birthday, My Favorite Person!",
    subHeader: "To My Bachaaaa ❤️",
    stampText: "100% Certified Cutest Birthday Girl",
    wishPrompt: "Close your eyes, make a birthday wish, and tap the candles to blow them out! ✨",
    wishLockedMessage: "Wish locked in! Hope all your dreams come true today, My Bachaaaa ❤️",
    totalCandles: 3
  },

  // STEP 4: Interactive Polaroid Clothesline & Gallery
  polaroids: [
    // --- 6 POLAROIDS FOR THE HANGING STRING GALLERY ---
    {
      id: 1,
      type: "string",
      imageSrc: "assets/photos/photo-1.jpeg",
      caption: "Ek bacchu bija bacchu ne ramade che 🤭",
      tiltAngle: -3.5
    },
    {
      id: 2,
      type: "string",
      imageSrc: "assets/photos/photo-2.jpeg",
      caption: "Hotter than my morning tea 🫠",
      tiltAngle: 2.5
    },
    {
      id: 3,
      type: "string",
      imageSrc: "assets/photos/photo-3.jpeg",
      caption: "My moon! 🌙",
      tiltAngle: -2.0
    },
    {
      id: 4,
      type: "string",
      imageSrc: "assets/photos/photo-4.jpeg",
      caption: "The McD incident 🫣",
      tiltAngle: 3.5
    },
    {
      id: 5,
      type: "string",
      imageSrc: "assets/photos/photo-5.jpeg",
      caption: "The cutest smile I fall for everyday 🥰",
      tiltAngle: -2.8
    },
    {
      id: 6,
      type: "string",
      imageSrc: "assets/photos/photo-6.jpeg",
      caption: "These cute faces you make 😘",
      tiltAngle: 2.2
    },

    // --- 4 POLAROIDS FOR THE DRAGGABLE SCATTER TABLE ---
    {
      id: 7,
      type: "scatter",
      imageSrc: "assets/photos/photo-7.jpeg",
      caption: "My favvvvvvvvvv 💕",
      tiltAngle: -6.0
    },
    {
      id: 8,
      type: "scatter",
      imageSrc: "assets/photos/photo-8.jpeg",
      caption: "The Warmest Hug 🫂",
      tiltAngle: 4.5
    },
    {
      id: 9,
      type: "scatter",
      imageSrc: "assets/photos/photo-9.jpeg",
      caption: "The Navratri Fit! 😩",
      tiltAngle: -4.0
    },
    {
      id: 10,
      type: "scatter",
      imageSrc: "assets/photos/photo-10.jpeg",
      caption: "Happy Birthdayyy Bachhaaaaaa 🎂",
      tiltAngle: 3.0
    }
  ],

  // STEP 6: THE STICKY NOTES CORNER & COMPLIMENT TICKET DISPENSER
  stickyNotes: [
    {
      id: 1,
      color: "yellow",
      tilt: -2.5,
      tapeColor: "tape-pink-washi",
      text: "Daily Reminder: You have the prettiest smile in the entire world ✨"
    },
    {
      id: 2,
      color: "pink",
      tilt: 3.0,
      tapeColor: "tape-gold-washi",
      text: "1000/10 Girlfriend. Would fall in love with you all over again ❤️"
    },
    {
      id: 3,
      color: "mint",
      tilt: -1.8,
      tapeColor: "tape-mint-washi",
      text: "My favorite place to be is wherever you are, My Bachaaaa 🥰"
    }
  ],

  compliments: [
    "The sound of your laugh can instantly turn my darkest, most exhausting day into pure sunshine.",
    "Whenever you hold my hand, all the noise and worries in the universe just fade away.",
    "You have the most captivating eyes I've ever seen—I could lose myself in them forever.",
    "I love the way your face lights up when you get excited about the little things. It is the cutest thing on earth.",
    "Being with you feels like coming home. You are my safe space and my greatest peace.",
    "You make loving you feel so effortless and natural. Falling for you was the best decision of my life.",
    "Thank you for being so patient, sweet, and gentle with my heart. You deserve the entire world.",
    "Even when we do absolutely nothing together, just sitting next to you is my favorite part of the week.",
    "You are undeniably, effortlessly gorgeous—especially when you don't even realize you are.",
    "Your silly jokes and little dance moves never fail to make my heart melt completely.",
    "I admire your kind heart and how deeply you care for people. You inspire me to be a better person every day.",
    "No matter how busy life gets, you will always be my number one priority and my favorite thought.",
    "I love how I can tell you anything without fear. Thank you for always listening and understanding me.",
    "Every single love song I listen to makes complete sense now because every lyric reminds me of you.",
    "You are my Bachaaaa, my best friend, and my whole universe. I love you more than words could ever describe."
  ],

  // ============================================================================
  // STEP 7: WAX-SEALED MULTI-PAGE BIRTHDAY LOVE LETTER
  // Add, edit, or remove pages below as you wish! Each item is a separate page.
  // ============================================================================
  loveLetterPages: [
    // Page 1: The Confession & How It All Began
    `<p class="letter-greeting">My dear love,</p>
     <p>Jyare te peli vaar confess kryu tu tyare I didn't know how should I react. Like I was shocked ke aatli dayi chokri che kyarey koi chokro nahi gamyo ne hu kem. Thought ke prank hase, or to dare hase. But the second I realised ke tu roi cho e vastu na laine, I knew it is real.</p>
     <p>At first i thought ke is it even worth my time for something like relationship? Then I gave it a little thought ke this your first relationship, my first relationship so why not give it a try. Somehow I had this gut feeling ke this will be the first and last relationship I'm ever gonna have and for now I think it's true.</p>
     <p>Not giving much thought to the future because I don't expect this relationship to be perfect. We both are new to this and trying our best to love each other. We do have many arguments, many topics we both have little disagreement on. But for a fact ik that these are the things which are making us stay closer and closer.</p>`,

    // Page 2: How You Changed My Life
    `<p>We both are serious type of people when it comes to the relationship which I have realised when you confessed. More like I made you confess (which was the best decision of my life btw).</p>
     <p>After that my life has completely changed. I started staying actually happy and not just fake smiling to everyone. Getting a bit popular. Toxic manso thi durr thava laigo. Sara manso mari pase ava laiga.</p>
     <p>Yk I feel like hu bhagwaan pase aatla time thi royo chu ke mari life sukame avi che, mane kem kai nthi madtu e badha nu tathastu have bole che bhagwaan. You're like lakshmi in my life.</p>`,

    // Page 3: Our First Date in the Rain & That Melted Smile
    `<p>I still remember how we planned our first date out of nowhere and mane j khabar che hu kai rite varsaad ma gadi laine aivo to tara mate. Ena pachi I was so excited ke mane etli kai khaas nindar bhi noti aavi. I had no idea ke hu karvu first date par. Tu aav tyare hug karu, kiss karu (e vadhare thai jaat ik atle tyare j e vastu magaj ma thi kadhi nakhi ti), flowers lai jaav and many more thoughts.</p>
     <p>But chelle dmart gyo to tyare chocolate joyi and I thought yes tane chocolates bov game so me savthi pela e upadi lidhi vichaira vagar. Ferrero rocher hati but e khali 6 j aave and mane lagtu htu ke tane ema maja bhi no avat (which was true) so sav thi pela tamne chocolate aapi. Ane tara face par je smile hati 🫠❤️. I just melted there.</p>
     <p>Ena pachi apde lunch karta hata tyare bhi mari icha hati ke apde photos click kari but tmne jarai ras aj noto so me teva didhu (huh). Return avta hata tyare te je ritna hug kryu che mane. I got scared ke aane su thai che but pachi yaad aayu ke te kidhu tu tane pachi mane java deta vandho padse so I let it be.</p>`,

    // Page 4: Us Against The Problem & First Sign-Off
    `<p>Now coming back to present, I feel like we still have a long way to go. There are some things I feel ke apde bey ne khabar nthi ek bija ni je agad jaata hopefully khabar padi jase. I don't expect everything to go as planned because who knows what's written in our destiny. But what I really hope is that I want "US" to be written in that destiny.</p>
     <p>I am damn sure that we won't be seperated until unless we give up on each other. (I hope evu na thai 🥺). Another thing ke ik we do fight some times or most of the times but I just want those fights to be "me and you v/s the problem" and not "me v/s you". Never want those fights to weaken our bond. Yeah sometimes I do feel like it is taking us apart but later on it turns out to be just my overthinking. Always hoping that it stays that way only 🤞.</p>
     <p>So yeah that's it for now. Idk what to say anymore.<br>Always thanking god for letting us be together🧿🫶</p>
     <div class="letter-signature-block">
       <p class="signature-date">Yours only,</p>
       <p class="signature-name">Golu Molu 😚</p>
     </div>`,

    // Page 5: The Twist — "Atyare..?" & Loving You Harder
    `<p class="letter-greeting">Uper je bhi lakhelu che e bdhu j me tyare laikhu tu jyare te mane puchyu tu ke hu tara mate kevu feel karu chu.</p>
     <p><strong>Atyare..? Atyare bhi same che but there is something extra with that.</strong></p>
     <p>I've started loving you harder, started falling for you harder, getting "bored" of you (which does not mean ke I don't love you but it means we are growing together and I am getting used to you. Aa vastu ek time par thavani j hati because it is the human nature and this also makes me want to stay loyal for you and giving you all the love you deserve) and there are many frosting on the cake.</p>
     <p>Yk I never thought ke you deserve someone better than me. Even if I think ke you deserve better then I slap myself and say "You have to be the better person who she deserves". You can call me selfish for this part but yeah I want you and only you. No one else can have you. If you think I have flaws and you don't like them then tell me. I will fix those.</p>`,

    // Page 6: My Honest Apology & Promise to You
    `<p>Ik we have a lot of fights and hu tane halta khijai jato hoi because I have anger issues. Especially hu ghare hoi tyare.</p>
     <p>Today is 12:17 AM of 8th November and me tane khijayi lidhu gai kaale bopore just because I was not doing well enough in the game which was my fault not at all your fault. Mare tara par em gusso karvani jarai jarur noti you didn't deserve that.</p>
     <p>I will make sure ke tane aavu biji vaar kyarey feel na thai. I'm sorry bacchaaaa 🥺.</p>`,

    // Page 7: Forever Your Golu Molu & I LOVE YOU 3000
    `<p>This is your golu molu (who never knew how to express himself btw) trying his best to express his emotions and feelings openly and as much as he can. I just want to say that I am lucky enough to have you in my life. I will cherish you not forever but as far as we are together.</p>
     <p>We don't know about the future but we can reshape it if apde try kariye to. I hope nothing goes wrong between us. In my gut I have this feeling that nothing will because we always find our ways back to each other after every fights. None of us can stay mad at each other for very long.</p>
     <p><strong>I LOVE YOU 3000.</strong><br><em>(Search for the reference in google 😉)</em></p>
     <p class="letter-final-birthday-wish">Happy Birthday Bacchhaaaaaaaa 😗😙😚😘❤️🧡💛💚🩵💙💜🤎🖤🩶🤍🩷💘💝💖💗💓💞💕💌💟♥️❣️❤️🔥🫀🫶.</p>`
  ],

  // ============================================================================
  // STEP 8: THE FINALE & INSTANT WHATSAPP NOTIFICATION
  // ============================================================================
  whatsapp: {
    // -------------------------------------------------------------------------
    // 📱 YOUR WHATSAPP NUMBER & CUSTOM NOTIFICATION MESSAGE:
    // - Format: Country code + phone number without '+' or spaces (e.g. "918401229090")
    // - Message: The automated romantic text she will send you on WhatsApp!
    // -------------------------------------------------------------------------
    phoneNumber: "918401229090",
    message: "Heyyy! I just opened my birthday scrapbook website, read your whole letter, and I'm claiming my unlimited hugs right now!! 😭❤️✨"
  }
};

/**
 * ==============================================================================
 * UTILITY HELPERS
 * ==============================================================================
 */

// Safely invoke canvas-confetti without throwing errors if the CDN loads slowly or fails
function safeConfetti(options) {
  if (typeof window.confetti === "function") {
    try {
      window.confetti(options);
    } catch (_) {}
  }
}

// Escape raw strings for safe dynamic HTML injection
function escapeHTML(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * ==============================================================================
 * SOUND EFFECTS SYNTHESIZER (Web Audio API - Zero External Dependencies)
 * Provides subtle tactile feedback for keypad clicks and joyful unlock chime
 * ==============================================================================
 */
class SoundEffects {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  // Soft vintage mechanical click when pressing keypad
  playClick() {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(420, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (_) {}
  }

  // Sweet gentle error thud
  playError() {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.18);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.18);
    } catch (_) {}
  }

  // Warm fairy-tale brass chime on unlock
  playUnlockChime() {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 arpeggio
      notes.forEach((freq, index) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = this.ctx.currentTime + index * 0.1;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.14, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.8);
      });
    } catch (_) {}
  }

  // Soft air puff sound when extinguishing a candle
  playPuff() {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const bufferSize = Math.floor(this.ctx.sampleRate * 0.14);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.6;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(500, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.14);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.14);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start();
    } catch (_) {}
  }

  // Dreamy celestial celebration chime when all candles are blown out
  playWishChime() {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const chord = [523.25, 659.25, 783.99, 987.77, 1046.50]; // C5, E5, G5, B5, C6
      chord.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = this.ctx.currentTime + idx * 0.08;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.12, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 1.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 1.2);
      });
    } catch (_) {}
  }

  // Soft tactile paper flutter / card flip sound
  playCardFlip() {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.09, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (_) {}
  }

  // Mechanical ticket ratchet click & vintage paper slide sound
  playTicketDispense() {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      // Mechanical ratchet clicks
      [0, 0.04, 0.09].forEach((delay, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(560 + idx * 70, this.ctx.currentTime + delay);
        osc.frequency.exponentialRampToValueAtTime(220, this.ctx.currentTime + delay + 0.03);

        gain.gain.setValueAtTime(0.06, this.ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + 0.03);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + delay);
        osc.stop(this.ctx.currentTime + delay + 0.03);
      });

      // Paper slide / flutter sweep
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.16);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.4;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1200, this.ctx.currentTime + 0.08);
      filter.frequency.exponentialRampToValueAtTime(350, this.ctx.currentTime + 0.22);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.1, this.ctx.currentTime + 0.08);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.22);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);

      noise.start(this.ctx.currentTime + 0.08);
    } catch (_) {}
  }

  // Crisp resonant wax seal cracking sound
  playWaxCrack() {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      // Sharp initial snap impulse
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.09);

      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.09);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.09);

      // Brittle crunch burst
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.12);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.5;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(1500, this.ctx.currentTime);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.14, this.ctx.currentTime);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);

      noise.start();
    } catch (_) {}
  }

  // Soft delicate page turn rustle
  playPageTurn() {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const bufferSize = Math.floor(this.ctx.sampleRate * 0.14);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.35;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(900, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(450, this.ctx.currentTime + 0.14);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.14);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start();
    } catch (_) {}
  }

  // Grand celestial celebration chime & harmonic chords when claiming hug
  playHugClaim() {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      // Joyful celebratory ascending chime arpeggio: C5, E5, G5, B5, C6, E6
      const arpeggio = [523.25, 659.25, 783.99, 987.77, 1046.50, 1318.51];
      arpeggio.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = this.ctx.currentTime + idx * 0.08;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.12, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 1.4);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 1.4);
      });
    } catch (_) {}
  }
}

const sfx = new SoundEffects();

/**
 * ==============================================================================
 * STEP 1: THE LOCKED SCRAPBOOK CONTROLLER
 * ==============================================================================
 */
class LockScreenController {
  constructor() {
    this.currentCode = "";
    this.maxDigits = 4;
    this.isProcessing = false;
    this.isUnlocked = false;

    // DOM Elements
    this.lockScreenEl = document.getElementById("lock-screen");
    this.scrapbookMainEl = document.getElementById("scrapbook-main");
    this.lockCardEl = document.getElementById("lock-card");
    this.padlockSvg = document.getElementById("padlock-svg");
    this.pinBoxes = document.querySelectorAll(".pin-box");
    this.messageEl = document.getElementById("lock-message");
    this.hintEl = document.getElementById("lock-hint");
    this.keypadGrid = document.querySelector(".keypad-grid");

    this.init();
  }

  init() {
    if (this.hintEl && CONFIG.messages.passcodeHint) {
      this.hintEl.textContent = CONFIG.messages.passcodeHint;
    }
    if (this.messageEl && CONFIG.messages.initialPrompt) {
      this.messageEl.textContent = CONFIG.messages.initialPrompt;
    }

    this.attachKeypadListeners();
    this.attachKeyboardListeners();
    this.updateDisplay();
  }

  attachKeypadListeners() {
    if (!this.keypadGrid) return;
    this.keypadGrid.addEventListener("click", (e) => {
      const btn = e.target.closest(".key-btn");
      if (!btn || this.isProcessing || this.isUnlocked) return;
      sfx.playClick();
      this.handleKeyInput(btn.dataset.key);
    });
  }

  attachKeyboardListeners() {
    window.addEventListener("keydown", (e) => {
      if (this.isProcessing || this.isUnlocked) return;

      if (e.key >= "0" && e.key <= "9") {
        e.preventDefault();
        this.highlightKey(e.key);
        sfx.playClick();
        this.handleKeyInput(e.key);
      } else if (e.key === "Backspace") {
        e.preventDefault();
        this.highlightKey("backspace");
        sfx.playClick();
        this.handleKeyInput("backspace");
      } else if (e.key === "Escape" || e.key === "Delete") {
        e.preventDefault();
        this.highlightKey("clear");
        sfx.playClick();
        this.handleKeyInput("clear");
      }
    });
  }

  highlightKey(keyVal) {
    const btn = document.querySelector(`.key-btn[data-key="${keyVal}"]`);
    if (btn) {
      btn.classList.add("is-pressed");
      setTimeout(() => btn.classList.remove("is-pressed"), 120);
    }
  }

  handleKeyInput(key) {
    if (key === "clear") {
      this.currentCode = "";
      this.setMessage(CONFIG.messages.initialPrompt);
      this.updateDisplay();
      return;
    }

    if (key === "backspace") {
      if (this.currentCode.length > 0) {
        this.currentCode = this.currentCode.slice(0, -1);
        this.setMessage(CONFIG.messages.initialPrompt);
        this.updateDisplay();
      }
      return;
    }

    if (this.currentCode.length < this.maxDigits) {
      this.currentCode += key;
      this.updateDisplay();

      if (this.currentCode.length === this.maxDigits) {
        this.validatePasscode();
      }
    }
  }

  updateDisplay(isError = false) {
    this.pinBoxes.forEach((box, index) => {
      box.classList.toggle("filled", index < this.currentCode.length);
      box.classList.toggle("is-active", index < this.currentCode.length);
      box.classList.toggle("is-error", isError);
    });
  }

  setMessage(text, type = "normal") {
    if (!this.messageEl) return;
    this.messageEl.textContent = text;
    this.messageEl.className = "lock-message";
    if (type === "error") this.messageEl.classList.add("error");
    if (type === "success") this.messageEl.classList.add("success");
  }

  validatePasscode() {
    this.isProcessing = true;

    if (this.currentCode === CONFIG.passcode) {
      this.handleUnlockSuccess();
    } else {
      this.handleUnlockError();
    }
  }

  handleUnlockError() {
    sfx.playError();
    this.setMessage(CONFIG.messages.errorHint, "error");
    this.updateDisplay(true);

    if (this.lockCardEl) {
      this.lockCardEl.classList.add("shake-animation");
    }

    setTimeout(() => {
      if (this.lockCardEl) {
        this.lockCardEl.classList.remove("shake-animation");
      }
      this.currentCode = "";
      this.updateDisplay(false);
      this.setMessage(CONFIG.messages.initialPrompt);
      this.isProcessing = false;
    }, 800);
  }

  handleUnlockSuccess() {
    this.isUnlocked = true;
    sfx.playUnlockChime();
    this.setMessage(CONFIG.messages.successHint, "success");

    // Immediately start audio within the synchronous user gesture tick to bypass modern browser autoplay blocks
    if (window.vinylPlayer && CONFIG.music.autoplayOnUnlock) {
      window.vinylPlayer.playWithRamp(1.0, 1500);
    }

    if (this.padlockSvg) {
      this.padlockSvg.classList.add("is-unlocked");
    }

    this.triggerGoldSparkles();

    setTimeout(() => {
      if (this.lockScreenEl) {
        this.lockScreenEl.classList.add("is-unlocked");
      }

      if (this.scrapbookMainEl) {
        this.scrapbookMainEl.classList.remove("is-locked");
        this.scrapbookMainEl.setAttribute("aria-hidden", "false");
      }

      setTimeout(() => {
        if (this.lockScreenEl) {
          this.lockScreenEl.classList.add("is-hidden");
          this.lockScreenEl.setAttribute("aria-hidden", "true");
        }

        window.dispatchEvent(new Event("scrapbookUnlocked"));
      }, 1200);

    }, 500);
  }

  triggerGoldSparkles() {
    safeConfetti({
      particleCount: CONFIG.confetti.particleCount,
      spread: CONFIG.confetti.spread,
      origin: { y: CONFIG.confetti.originY },
      colors: CONFIG.confetti.colors,
      ticks: 200,
      gravity: 0.8,
      scalar: 1.1,
      shapes: ['star', 'circle']
    });

    setTimeout(() => {
      safeConfetti({
        particleCount: 50,
        angle: 60,
        spread: 60,
        origin: { x: 0.15, y: 0.65 },
        colors: [CONFIG.colors.fairyGold, CONFIG.colors.blushPink, CONFIG.colors.goldLight]
      });
      safeConfetti({
        particleCount: 50,
        angle: 120,
        spread: 60,
        origin: { x: 0.85, y: 0.65 },
        colors: [CONFIG.colors.fairyGold, CONFIG.colors.blushPink, CONFIG.colors.goldLight]
      });
    }, 220);
  }
}

/**
 * ==============================================================================
 * STEP 2: FLOATING VINYL MUSIC PLAYER CONTROLLER
 * ==============================================================================
 */
class VinylPlayerController {
  constructor() {
    this.playerEl = document.getElementById("vinyl-player");
    this.audioEl = document.getElementById("bg-music");
    this.vinylCardEl = document.getElementById("vinyl-card");
    this.playBtn = document.getElementById("vinyl-play-btn");
    this.playIcon = document.getElementById("vinyl-play-icon");
    this.pauseIcon = document.getElementById("vinyl-pause-icon");
    this.btnText = document.getElementById("vinyl-btn-text");
    this.titleEl = document.getElementById("vinyl-song-title");
    this.titleCloneEl = document.getElementById("vinyl-song-title-clone");
    this.notesContainer = document.getElementById("vinyl-notes-container");

    this.isPlaying = false;
    this.notesTimer = null;
    this.symbols = ["♪", "♫", "♩", "♥", "✨", "💕"];

    this.init();
  }

  init() {
    if (!this.playerEl || !this.audioEl) return;

    if (CONFIG.music.title) {
      if (this.titleEl) this.titleEl.textContent = CONFIG.music.title;
      if (this.titleCloneEl) this.titleCloneEl.textContent = CONFIG.music.title;
    }

    if (CONFIG.music.src) {
      const sourceEl = this.audioEl.querySelector("source");
      if (sourceEl) {
        sourceEl.src = CONFIG.music.src;
      }
      this.audioEl.src = CONFIG.music.src;
      this.audioEl.load();
    }

    if (this.vinylCardEl) {
      this.vinylCardEl.addEventListener("click", (e) => {
        if (e.target.closest("#vinyl-play-btn")) return;
        this.toggle();
      });
    }

    if (this.playBtn) {
      this.playBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggle();
      });
    }

    this.audioEl.addEventListener("ended", () => {
      if (this.audioEl.loop) {
        this.play(false);
      } else {
        this.setPlayingState(false);
      }
    });

    window.addEventListener("scrapbookUnlocked", () => {
      this.handleScrapbookUnlocked();
    });
  }

  handleScrapbookUnlocked() {
    if (!CONFIG.music.autoplayOnUnlock) return;
    if (this.isPlaying) return; // Prevent duplicate play if already started synchronously on unlock
    this.play(true);
  }

  playWithRamp(targetVolume = 1.0, rampDurationMs = 1500) {
    if (!this.audioEl) return;
    this.audioEl.volume = 0;
    this.play(true);
    this.rampVolumeUp(targetVolume, rampDurationMs);
  }

  rampVolumeUp(targetVolume = 1.0, durationMs = 1500) {
    if (!this.audioEl) return;
    if (this.fadeInterval) clearInterval(this.fadeInterval);
    const stepMs = 50;
    const steps = Math.max(1, durationMs / stepMs);
    const volIncrement = targetVolume / steps;

    this.fadeInterval = setInterval(() => {
      if (!this.audioEl || !this.isPlaying) {
        clearInterval(this.fadeInterval);
        return;
      }
      const newVol = this.audioEl.volume + volIncrement;
      if (newVol >= targetVolume) {
        this.audioEl.volume = targetVolume;
        clearInterval(this.fadeInterval);
      } else {
        this.audioEl.volume = Math.min(targetVolume, newVol);
      }
    }, stepMs);
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play(false);
    }
  }

  play(isAutoplayAttempt = false) {
    if (!this.audioEl) return;

    if (!isAutoplayAttempt && this.audioEl.volume === 0) {
      this.audioEl.volume = 1.0;
    }

    const playPromise = this.audioEl.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.setPlayingState(true);
        })
        .catch(() => {
          if (isAutoplayAttempt) {
            this.setPlayingState(false);
          } else {
            // Keep spinning disc and floating notes visual effect
            this.setPlayingState(true);
          }
        });
    } else {
      this.setPlayingState(true);
    }
  }

  pause() {
    if (this.fadeInterval) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }
    if (this.audioEl) {
      this.audioEl.pause();
    }
    this.setPlayingState(false);
  }

  setPlayingState(playing) {
    this.isPlaying = playing;
    if (!this.playerEl) return;

    this.playerEl.classList.toggle("is-playing", playing);
    if (this.playIcon) this.playIcon.style.display = playing ? "none" : "inline";
    if (this.pauseIcon) this.pauseIcon.style.display = playing ? "inline" : "none";
    if (this.btnText) this.btnText.textContent = playing ? "Playing 🎵" : "Play Song";

    if (playing) {
      this.startSpawningNotes();
    } else {
      this.stopSpawningNotes();
    }
  }

  startSpawningNotes() {
    this.stopSpawningNotes();
    this.spawnSingleNote();
    this.notesTimer = setInterval(() => {
      this.spawnSingleNote();
    }, 700);
  }

  stopSpawningNotes() {
    if (this.notesTimer) {
      clearInterval(this.notesTimer);
      this.notesTimer = null;
    }
  }

  spawnSingleNote() {
    if (!this.notesContainer || !this.isPlaying) return;

    const note = document.createElement("span");
    note.className = "floating-music-note";
    note.textContent = this.symbols[Math.floor(Math.random() * this.symbols.length)];

    if (Math.random() > 0.5) {
      note.classList.add("note-pink");
    }

    const leftOffset = Math.floor(Math.random() * 80) + 10;
    const driftX = Math.floor(Math.random() * 60) - 30;
    const rot = Math.floor(Math.random() * 50) - 25;

    note.style.left = `${leftOffset}px`;
    note.style.setProperty("--drift-x", `${driftX}px`);
    note.style.setProperty("--rot", `${rot}deg`);

    this.notesContainer.appendChild(note);
    note.addEventListener("animationend", () => {
      note.remove();
    }, { once: true });
  }
}

/**
 * ==============================================================================
 * STEP 3: INTERACTIVE BIRTHDAY CAKE CONTROLLER
 * ==============================================================================
 */
class BirthdayCakeController {
  constructor() {
    this.sectionEl = document.getElementById("birthday-cake-section");
    this.promptTextEl = document.getElementById("cake-prompt-text");
    this.cakeBodyEl = document.getElementById("cake-clickable-body");
    this.smokeContainer = document.getElementById("smoke-container");
    this.wishResultCard = document.getElementById("wish-result-card");
    this.wishLockedText = document.getElementById("wish-locked-text");
    this.relightBtn = document.getElementById("relight-candles-btn");
    this.candlesRack = document.getElementById("candles-rack");

    this.candles = [
      { id: 1, el: document.querySelector('.candle-1'), flameEl: document.getElementById('flame-1') },
      { id: 2, el: document.querySelector('.candle-2'), flameEl: document.getElementById('flame-2') },
      { id: 3, el: document.querySelector('.candle-3'), flameEl: document.getElementById('flame-3') }
    ];

    this.litCandles = new Set([1, 2, 3]);
    this.isWishCompleted = false;

    this.init();
  }

  init() {
    if (!this.sectionEl) return;

    if (this.promptTextEl && CONFIG.birthdayCake?.wishPrompt) {
      this.promptTextEl.textContent = CONFIG.birthdayCake.wishPrompt;
    }
    if (this.wishLockedText && CONFIG.birthdayCake?.wishLockedMessage) {
      this.wishLockedText.textContent = CONFIG.birthdayCake.wishLockedMessage;
    }

    if (this.candlesRack) {
      this.candlesRack.addEventListener("click", (e) => {
        const candleEl = e.target.closest(".candle");
        if (!candleEl) return;
        e.stopPropagation();
        const candleId = parseInt(candleEl.dataset.candleId, 10);
        if (candleId) this.extinguishCandle(candleId);
      });
    }

    if (this.cakeBodyEl) {
      this.cakeBodyEl.addEventListener("click", () => {
        this.extinguishAllCandles();
      });
    }

    if (this.relightBtn) {
      this.relightBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.relightCandles();
      });
    }
  }

  extinguishCandle(candleId) {
    if (!this.litCandles.has(candleId)) return;

    this.litCandles.delete(candleId);
    const candleObj = this.candles.find(c => c.id === candleId);

    if (candleObj && candleObj.flameEl) {
      candleObj.flameEl.classList.add("is-extinguished");
      sfx.playPuff();
      this.spawnSmokeWisps(candleObj.el);
    }

    this.checkAllExtinguished();
  }

  extinguishAllCandles() {
    if (this.litCandles.size === 0) return;

    sfx.playPuff();
    this.candles.forEach(candle => {
      if (this.litCandles.has(candle.id)) {
        this.litCandles.delete(candle.id);
        if (candle.flameEl) {
          candle.flameEl.classList.add("is-extinguished");
          this.spawnSmokeWisps(candle.el);
        }
      }
    });

    this.checkAllExtinguished();
  }

  spawnSmokeWisps(candleElement) {
    if (!this.smokeContainer || !candleElement) return;

    const candleRect = candleElement.getBoundingClientRect();
    const containerRect = this.smokeContainer.getBoundingClientRect();
    const relativeX = candleRect.left + (candleRect.width / 2) - containerRect.left;
    const relativeY = 15;

    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        const wisp = document.createElement("div");
        wisp.className = "smoke-wisp";
        const driftX = (Math.random() * 40 - 20).toFixed(1);
        wisp.style.left = `${relativeX - 7}px`;
        wisp.style.top = `${relativeY}px`;
        wisp.style.setProperty("--smoke-drift-x", `${driftX}px`);

        this.smokeContainer.appendChild(wisp);
        wisp.addEventListener("animationend", () => {
          wisp.remove();
        }, { once: true });
      }, i * 70);
    }
  }

  checkAllExtinguished() {
    if (this.litCandles.size === 0 && !this.isWishCompleted) {
      this.isWishCompleted = true;

      setTimeout(() => {
        sfx.playWishChime();
        this.triggerWishConfetti();

        if (this.wishResultCard) {
          this.wishResultCard.classList.add("is-visible");
        }
      }, 400);
    }
  }

  triggerWishConfetti() {
    safeConfetti({
      particleCount: 75,
      spread: 90,
      origin: { y: 0.55 },
      colors: [CONFIG.colors.fairyGold, CONFIG.colors.blushPink, "#FFF", CONFIG.colors.goldLight]
    });

    setTimeout(() => {
      safeConfetti({
        particleCount: 50,
        angle: 60,
        spread: 60,
        origin: { x: 0.1, y: 0.6 },
        colors: [CONFIG.colors.fairyGold, CONFIG.colors.blushPink, "#FF6B8B"]
      });
      safeConfetti({
        particleCount: 50,
        angle: 120,
        spread: 60,
        origin: { x: 0.9, y: 0.6 },
        colors: [CONFIG.colors.fairyGold, CONFIG.colors.blushPink, "#FFD166"]
      });
    }, 250);
  }

  relightCandles() {
    sfx.playClick();
    this.litCandles = new Set([1, 2, 3]);
    this.isWishCompleted = false;

    if (this.wishResultCard) {
      this.wishResultCard.classList.remove("is-visible");
    }

    this.candles.forEach(candle => {
      if (candle.flameEl) {
        candle.flameEl.classList.remove("is-extinguished");
      }
    });
  }
}

/**
 * ==============================================================================
 * STEP 4: POLAROID GALLERY CONTROLLER
 * ==============================================================================
 */
class PolaroidGalleryController {
  constructor() {
    this.stringGallery = document.getElementById("string-gallery");
    this.stringRow1 = document.getElementById("string-row-1");
    this.stringRow2 = document.getElementById("string-row-2");
    this.scatterSurface = document.getElementById("scatter-table-surface");

    // Simple Lightbox Elements
    this.lightbox = document.getElementById("simple-lightbox");
    this.lightboxBackdrop = document.getElementById("lightbox-backdrop");
    this.lightboxClose = document.getElementById("lightbox-close");
    this.lightboxImg = document.getElementById("lightbox-img");
    this.lightboxCaption = document.getElementById("lightbox-caption");

    this.highestZIndex = 50;

    this.init();
  }

  init() {
    this.renderStringGallery();
    this.renderScatterTable();
    this.attachStringGalleryListeners();
    this.attachScatterDragPhysics();
    this.attachLightboxListeners();
  }

  renderStringGallery() {
    if (!CONFIG.polaroids) return;

    const stringItems = CONFIG.polaroids.filter(item => item.type === "string");
    const row1Items = stringItems.slice(0, 3);
    const row2Items = stringItems.slice(3, 6);

    if (this.stringRow1) {
      this.stringRow1.innerHTML = row1Items.map(item => this.createHangingPolaroidHTML(item)).join("");
    }
    if (this.stringRow2) {
      this.stringRow2.innerHTML = row2Items.map(item => this.createHangingPolaroidHTML(item)).join("");
    }
  }

  attachStringGalleryListeners() {
    if (!this.stringGallery) return;

    let startX = 0;
    let startY = 0;

    this.stringGallery.addEventListener("pointerdown", (e) => {
      const card = e.target.closest(".polaroid-card.hanging");
      if (!card) return;
      startX = e.clientX;
      startY = e.clientY;
    });

    this.stringGallery.addEventListener("pointerup", (e) => {
      const card = e.target.closest(".polaroid-card.hanging");
      if (!card) return;
      if (Math.hypot(e.clientX - startX, e.clientY - startY) < 6) {
        const id = parseInt(card.dataset.id, 10);
        const item = CONFIG.polaroids.find(p => p.id === id);
        if (item) this.openLightbox(item);
      }
    });

    this.stringGallery.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const card = e.target.closest(".polaroid-card.hanging");
        if (!card) return;
        e.preventDefault();
        const id = parseInt(card.dataset.id, 10);
        const item = CONFIG.polaroids.find(p => p.id === id);
        if (item) this.openLightbox(item);
      }
    });
  }

  createHangingPolaroidHTML(item) {
    return `
      <div class="polaroid-card hanging" data-id="${item.id}" style="--tilt-angle: ${item.tiltAngle}deg;" role="button" tabindex="0" aria-label="${escapeHTML(item.caption)}">
        <!-- Illustrated Wooden Clothespin -->
        <div class="wooden-clothespin" aria-hidden="true">
          <div class="clothespin-wood left"></div>
          <div class="clothespin-spring"></div>
          <div class="clothespin-wood right"></div>
        </div>

        <!-- Photo Frame & Image / Pastel Placeholder -->
        <div class="polaroid-photo-frame">
          <img src="${item.imageSrc}" alt="${escapeHTML(item.caption)}" class="polaroid-img" decoding="async"
               onload="this.classList.remove('img-hidden'); this.nextElementSibling.classList.add('placeholder-hidden');"
               onerror="this.classList.add('img-hidden'); this.nextElementSibling.classList.remove('placeholder-hidden');">
          <div class="polaroid-placeholder ${item.imageSrc ? 'placeholder-hidden' : ''}">
            <svg class="camera-doodle" viewBox="0 0 48 48" width="38" height="38">
              <path d="M8 14h6l3-5h14l3 5h6a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4z" fill="#F4ACB7" opacity="0.8"/>
              <circle cx="24" cy="27" r="8" fill="#FFF" stroke="#D8C3A5" stroke-width="2"/>
              <circle cx="24" cy="27" r="4" fill="#FFD166"/>
              <circle cx="37" cy="18" r="2.5" fill="#E893A0"/>
            </svg>
            <span class="placeholder-label">Photo Placeholder #${item.id}</span>
            <span class="placeholder-hint">(Add in CONFIG)</span>
          </div>
        </div>

        <!-- Caption -->
        <div class="polaroid-footer">
          <div class="polaroid-caption">${escapeHTML(item.caption)}</div>
        </div>
      </div>
    `;
  }

  renderScatterTable() {
    if (!this.scatterSurface || !CONFIG.polaroids) return;

    const scatterItems = CONFIG.polaroids.filter(item => item.type === "scatter");
    const defaultPositions = [
      { left: 6, top: 35, tapeGold: false },
      { left: 29, top: 85, tapeGold: true },
      { left: 53, top: 40, tapeGold: false },
      { left: 74, top: 80, tapeGold: true }
    ];

    this.scatterSurface.innerHTML = scatterItems.map((item, index) => {
      const pos = defaultPositions[index] || { left: 10 + index * 20, top: 50, tapeGold: false };
      return `
        <div class="polaroid-card polaroid-scatter" data-id="${item.id}"
             style="--tilt-angle: ${item.tiltAngle}deg; left: ${pos.left}%; top: ${pos.top}px; z-index: ${index + 10};"
             role="button" tabindex="0" aria-label="${escapeHTML(item.caption)}">
          
          <!-- Washi Tape Accent -->
          <div class="scatter-washi-tape ${pos.tapeGold ? 'scatter-tape-gold' : ''}" aria-hidden="true"></div>

          <!-- Photo Frame & Image / Pastel Placeholder -->
          <div class="polaroid-photo-frame">
            <img src="${item.imageSrc}" alt="${escapeHTML(item.caption)}" class="polaroid-img" decoding="async"
                 onload="this.classList.remove('img-hidden'); this.nextElementSibling.classList.add('placeholder-hidden');"
                 onerror="this.classList.add('img-hidden'); this.nextElementSibling.classList.remove('placeholder-hidden');">
            <div class="polaroid-placeholder ${item.imageSrc ? 'placeholder-hidden' : ''}">
              <svg class="camera-doodle" viewBox="0 0 48 48" width="38" height="38">
                <path d="M8 14h6l3-5h14l3 5h6a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4z" fill="#F4ACB7" opacity="0.8"/>
                <circle cx="24" cy="27" r="8" fill="#FFF" stroke="#D8C3A5" stroke-width="2"/>
                <circle cx="24" cy="27" r="4" fill="#FFD166"/>
                <circle cx="37" cy="18" r="2.5" fill="#E893A0"/>
              </svg>
              <span class="placeholder-label">Photo Placeholder #${item.id}</span>
              <span class="placeholder-hint">(Add in CONFIG)</span>
            </div>
          </div>

          <!-- Caption -->
          <div class="polaroid-footer">
            <div class="polaroid-caption">${escapeHTML(item.caption)}</div>
          </div>
        </div>
      `;
    }).join("");
  }

  attachScatterDragPhysics() {
    if (!this.scatterSurface) return;

    let activeDrag = null;

    this.scatterSurface.addEventListener("pointerdown", (e) => {
      const card = e.target.closest(".polaroid-scatter");
      if (!card || (e.button !== 0 && e.pointerType === "mouse")) return;

      this.highestZIndex++;
      card.style.zIndex = this.highestZIndex;

      card.setPointerCapture(e.pointerId);

      const cardRect = card.getBoundingClientRect();
      const surfaceRect = this.scatterSurface.getBoundingClientRect();

      activeDrag = {
        card,
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        initialLeft: cardRect.left - surfaceRect.left,
        initialTop: cardRect.top - surfaceRect.top,
        hasMoved: false
      };
    });

    this.scatterSurface.addEventListener("pointermove", (e) => {
      if (!activeDrag || activeDrag.pointerId !== e.pointerId) return;

      const deltaX = e.clientX - activeDrag.startX;
      const deltaY = e.clientY - activeDrag.startY;

      if (!activeDrag.hasMoved && Math.hypot(deltaX, deltaY) >= 6) {
        activeDrag.hasMoved = true;
        activeDrag.card.classList.add("is-dragging");
      }

      if (activeDrag.hasMoved) {
        const surfaceRect = this.scatterSurface.getBoundingClientRect();
        const cardW = activeDrag.card.offsetWidth;
        const cardH = activeDrag.card.offsetHeight;

        const maxLeft = surfaceRect.width - cardW * 0.4;
        const minLeft = -cardW * 0.2;
        const maxTop = surfaceRect.height - cardH * 0.4;
        const minTop = -cardH * 0.2;

        const newLeft = Math.max(minLeft, Math.min(maxLeft, activeDrag.initialLeft + deltaX));
        const newTop = Math.max(minTop, Math.min(maxTop, activeDrag.initialTop + deltaY));

        activeDrag.card.style.left = `${newLeft}px`;
        activeDrag.card.style.top = `${newTop}px`;
      }
    });

    const endDrag = (e) => {
      if (!activeDrag || activeDrag.pointerId !== e.pointerId) return;
      const { card, hasMoved, pointerId } = activeDrag;
      activeDrag = null;

      try {
        card.releasePointerCapture(pointerId);
      } catch (_) {}

      card.classList.remove("is-dragging");

      if (!hasMoved) {
        const id = parseInt(card.dataset.id, 10);
        const item = CONFIG.polaroids.find(p => p.id === id);
        if (item) this.openLightbox(item);
      } else {
        sfx.playClick();
      }
    };

    this.scatterSurface.addEventListener("pointerup", endDrag);
    this.scatterSurface.addEventListener("pointercancel", endDrag);

    this.scatterSurface.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const card = e.target.closest(".polaroid-scatter");
        if (!card) return;
        e.preventDefault();
        const id = parseInt(card.dataset.id, 10);
        const item = CONFIG.polaroids.find(p => p.id === id);
        if (item) this.openLightbox(item);
      }
    });
  }

  openLightbox(item) {
    if (!this.lightbox || !item) return;
    sfx.playClick();

    if (this.lightboxImg) {
      this.lightboxImg.src = item.imageSrc || "";
      this.lightboxImg.alt = item.caption || "Zoomed Photo";
    }

    if (this.lightboxCaption) {
      this.lightboxCaption.textContent = item.caption || "";
    }

    this.lightbox.classList.add("is-open");
    this.lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }

  closeLightbox() {
    if (!this.lightbox || !this.lightbox.classList.contains("is-open")) return;
    sfx.playClick();
    this.lightbox.classList.remove("is-open");
    this.lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }

  attachLightboxListeners() {
    if (this.lightboxClose) {
      this.lightboxClose.addEventListener("click", () => this.closeLightbox());
    }
    if (this.lightboxBackdrop) {
      this.lightboxBackdrop.addEventListener("click", () => this.closeLightbox());
    }
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.lightbox?.classList.contains("is-open")) {
        this.closeLightbox();
      }
    });
  }
}

/**
 * ==============================================================================
 * STEP 6: STICKY NOTES CORNER & COMPLIMENT TICKET DISPENSER CONTROLLER
 * ==============================================================================
 */
class StickyNotesDispenserController {
  constructor() {
    this.notesGrid = document.getElementById("sticky-notes-grid");
    this.dispenseBtn = document.getElementById("dispense-ticket-btn");
    this.ticketStage = document.getElementById("ticket-stage");

    this.currentIndex = 0;
    this.isDispensing = false;

    this.serialPrefixes = [
      "ADMIT ONE CUTIE",
      "VIP LIFETIME ACCESS",
      "100% CERTIFIED SWEETHEART",
      "OFFICIAL HEART ACCESS",
      "GOLDEN PASS FOR BACHAAAA",
      "PERMANENT CUDDLE TICKET",
      "SOULMATE PASSPORT",
      "UNCONDITIONAL LOVE PASS",
      "BEST GIRLFRIEND TICKET",
      "ADMIT ONE CUTIE",
      "HAPPINESS GUARANTEE",
      "ALWAYS & FOREVER PASS",
      "MY WHOLE WORLD TICKET",
      "SWEETEST SMILE ADMISSION",
      "GRAND GOLDEN FINALE PASS"
    ];

    this.init();
  }

  init() {
    this.renderStickyNotes();
    this.renderInitialTicket();
    this.attachEventListeners();
  }

  renderStickyNotes() {
    if (!this.notesGrid || !CONFIG.stickyNotes) return;

    this.notesGrid.innerHTML = CONFIG.stickyNotes.map((note, index) => {
      const colorClass = note.color === "yellow" ? "note-yellow" : (note.color === "pink" ? "note-pink" : "note-mint");
      const tapeClass = note.tapeColor || "tape-pink-washi";
      const tapeTilt = (index % 2 === 0 ? -2 : 3) * (index + 1);

      return `
        <div class="sticky-note ${colorClass}" data-id="${note.id}" style="--tilt-angle: ${note.tilt}deg;" role="button" tabindex="0" aria-label="${escapeHTML(note.text)}">
          <!-- Washi Tape Strip -->
          <div class="sticky-washi-tape ${tapeClass}" style="--tape-tilt: ${tapeTilt}deg;" aria-hidden="true"></div>

          <!-- Note Handwritten Body -->
          <p class="sticky-note-text">${escapeHTML(note.text)}</p>

          <!-- Note Footer with Heart Stamp -->
          <div class="sticky-note-footer">
            <span class="sticky-note-stamp" aria-hidden="true">📌</span>
          </div>
        </div>
      `;
    }).join("");

    this.notesGrid.addEventListener("click", (e) => {
      const noteEl = e.target.closest(".sticky-note");
      if (!noteEl) return;
      noteEl.classList.toggle("is-curled");
      sfx.playClick();
    });

    this.notesGrid.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const noteEl = e.target.closest(".sticky-note");
        if (!noteEl) return;
        e.preventDefault();
        noteEl.classList.toggle("is-curled");
        sfx.playClick();
      }
    });
  }

  renderInitialTicket() {
    if (!this.ticketStage || !CONFIG.compliments || CONFIG.compliments.length === 0) return;

    const compliment = CONFIG.compliments[0];
    const serialNumber = "001";
    const prefix = this.serialPrefixes[0] || "ADMIT ONE CUTIE";

    this.ticketStage.innerHTML = `
      <div class="vintage-ticket" id="current-ticket">
        <div class="ticket-header">
          <span class="ticket-serial-badge">#${serialNumber} — ${prefix}</span>
          <span class="ticket-top-tag">OFFICIAL TICKET TO MY HEART ❤️</span>
        </div>
        <div class="ticket-body">
          <p class="ticket-compliment-text">"${escapeHTML(compliment)}"</p>
        </div>
        <div class="ticket-footer">
          <span class="ticket-barcode">||| | |||| | ||| | ||||</span>
          <span class="ticket-validity-stamp">VALID: FOREVER & ALWAYS 💕</span>
        </div>
      </div>
    `;
  }

  attachEventListeners() {
    if (!this.dispenseBtn) return;
    this.dispenseBtn.addEventListener("click", () => {
      this.dispenseNextTicket();
    });
  }

  dispenseNextTicket() {
    if (this.isDispensing) return;
    this.isDispensing = true;

    this.currentIndex = (this.currentIndex + 1) % CONFIG.compliments.length;

    const compliment = CONFIG.compliments[this.currentIndex];
    const ticketNum = String(this.currentIndex + 1).padStart(3, "0");
    const prefix = this.serialPrefixes[this.currentIndex % this.serialPrefixes.length] || "ADMIT ONE CUTIE";

    sfx.playTicketDispense();

    if (this.ticketStage) {
      this.ticketStage.innerHTML = `
        <div class="vintage-ticket ticket-slide-anim" id="current-ticket">
          <div class="ticket-header">
            <span class="ticket-serial-badge">#${ticketNum} — ${prefix}</span>
            <span class="ticket-top-tag">TRUTH ABOUT MY BACHAAAA ❤️</span>
          </div>
          <div class="ticket-body">
            <p class="ticket-compliment-text">"${escapeHTML(compliment)}"</p>
          </div>
          <div class="ticket-footer">
            <span class="ticket-barcode">||| | |||| | ||| | ||||</span>
            <span class="ticket-validity-stamp">VALID: FOREVER & ALWAYS 💕</span>
          </div>
        </div>
      `;
    }

    if (this.currentIndex === 0 || this.currentIndex === 9 || this.currentIndex === 14) {
      safeConfetti({
        particleCount: 28,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#F4ACB7", "#FFD166", "#FAF6ED", "#D8C3A5"]
      });
    }

    setTimeout(() => {
      this.isDispensing = false;
    }, 600);
  }
}

/**
 * ==============================================================================
 * STEP 7: WAX-SEALED ENVELOPE & MULTI-PAGE LOVE LETTER CONTROLLER
 * ==============================================================================
 */
class LoveLetterEnvelopeController {
  constructor() {
    this.envelope3D = document.getElementById("envelope-3d");
    this.waxSealBtn = document.getElementById("wax-seal-btn");
    this.letterReader = document.getElementById("letter-reader");
    this.stationerySheet = document.getElementById("stationery-sheet");
    this.letterPageContent = document.getElementById("letter-page-content");
    this.pageIndicator = document.getElementById("page-indicator-text");
    this.prevBtn = document.getElementById("prev-page-btn");
    this.nextBtn = document.getElementById("next-page-btn");
    this.pageDotsContainer = document.getElementById("letter-page-dots");
    this.refoldBtn = document.getElementById("refold-letter-btn");
    this.envelopeSection = document.getElementById("envelope-section");

    this.isOpen = false;
    this.currentPageIndex = 0;
    this.pages = CONFIG.loveLetterPages || [];

    this.init();
  }

  init() {
    this.renderCurrentPage();
    this.attachEventListeners();
  }

  attachEventListeners() {
    if (this.waxSealBtn) {
      this.waxSealBtn.addEventListener("click", () => {
        this.openEnvelope();
      });
    }

    if (this.prevBtn) {
      this.prevBtn.addEventListener("click", () => {
        this.goToPrevPage();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener("click", () => {
        this.goToNextPage();
      });
    }

    if (this.refoldBtn) {
      this.refoldBtn.addEventListener("click", () => {
        this.closeEnvelope();
      });
    }
  }

  openEnvelope() {
    if (this.isOpen) return;
    this.isOpen = true;

    sfx.playWaxCrack();

    if (this.waxSealBtn) {
      this.waxSealBtn.classList.add("is-broken");
    }

    if (this.envelope3D) {
      this.envelope3D.classList.add("is-open");
    }

    setTimeout(() => {
      safeConfetti({
        particleCount: 30,
        spread: 70,
        origin: { y: 0.65 },
        colors: ["#E63946", "#F4ACB7", "#FFD166", "#FAF6ED"]
      });
    }, 350);

    setTimeout(() => {
      if (this.letterReader) {
        this.letterReader.classList.add("is-visible");
        this.scrollToLetter();
      }
    }, 700);
  }

  closeEnvelope() {
    if (!this.isOpen) return;
    this.isOpen = false;
    sfx.playClick();

    if (this.letterReader) {
      this.letterReader.classList.remove("is-visible");
    }

    setTimeout(() => {
      if (this.envelope3D) {
        this.envelope3D.classList.remove("is-open");
      }
      if (this.waxSealBtn) {
        this.waxSealBtn.classList.remove("is-broken");
      }
      this.currentPageIndex = 0;
      this.renderCurrentPage();

      if (this.envelopeSection) {
        this.envelopeSection.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 400);
  }

  renderCurrentPage() {
    if (!this.pages || this.pages.length === 0) return;

    const totalPages = this.pages.length;
    const pageHTML = this.pages[this.currentPageIndex];
    const isFinalPage = this.currentPageIndex === totalPages - 1;

    if (this.letterPageContent) {
      this.letterPageContent.classList.remove("page-enter-anim");
      void this.letterPageContent.offsetWidth;

      let content = pageHTML;
      if (isFinalPage) {
        content += `
          <div class="letter-signature-block">
            <p class="signature-date">Yours only, forever & always,</p>
            <p class="signature-name">Your Golu Molu 😚❤️</p>
          </div>
          <div class="letter-page-hug-wrapper">
            <button type="button" class="claim-hug-btn" id="claim-hug-btn-page" aria-label="Received with Love / Claim Your Hug">
              <span class="btn-sparkle-icon sparkle-left" aria-hidden="true">✨</span>
              <span class="btn-hug-text">Received with Love / Claim Your Hug 🤗✨</span>
              <span class="btn-sparkle-icon sparkle-right" aria-hidden="true">💖</span>
            </button>
          </div>
        `;
      }

      this.letterPageContent.innerHTML = content;
      this.letterPageContent.classList.add("page-enter-anim");
    }

    if (this.pageIndicator) {
      this.pageIndicator.textContent = `Page ${this.currentPageIndex + 1} of ${totalPages}`;
    }

    if (this.prevBtn) {
      this.prevBtn.disabled = this.currentPageIndex === 0;
    }

    if (this.nextBtn) {
      if (isFinalPage) {
        this.nextBtn.classList.add("is-hidden");
        this.nextBtn.disabled = true;
      } else {
        this.nextBtn.classList.remove("is-hidden");
        this.nextBtn.disabled = false;
      }
    }

    if (this.pageDotsContainer) {
      this.pageDotsContainer.innerHTML = Array.from({ length: totalPages }).map((_, idx) => `
        <span class="page-dot ${idx === this.currentPageIndex ? 'active' : ''}"></span>
      `).join("");
    }
  }

  goToNextPage() {
    if (this.currentPageIndex < this.pages.length - 1) {
      this.currentPageIndex++;
      sfx.playPageTurn();
      this.renderCurrentPage();
      this.scrollToLetter();
    }
  }

  goToPrevPage() {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
      sfx.playPageTurn();
      this.renderCurrentPage();
      this.scrollToLetter();
    }
  }

  scrollToLetter() {
    if (this.stationerySheet) {
      this.stationerySheet.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

/**
 * ==============================================================================
 * STEP 8: THE FINALE & INSTANT WHATSAPP NOTIFICATION CONTROLLER
 * ==============================================================================
 */
class FinaleWhatsAppController {
  constructor() {
    this.modal = document.getElementById("hug-modal");
    this.modalBackdrop = document.getElementById("hug-modal-backdrop");
    this.closeBtn = document.getElementById("hug-modal-close-btn");
    this.statusBox = document.getElementById("hug-status-box");
    this.statusText = document.getElementById("hug-status-text");
    this.whatsappDirectBtn = document.getElementById("whatsapp-direct-btn");

    this.isClaiming = false;
    this.autoRedirectTimer = null;

    this.init();
  }

  init() {
    this.setupWhatsAppURL();
    this.attachEventListeners();
  }

  setupWhatsAppURL() {
    if (!CONFIG.whatsapp || !CONFIG.whatsapp.phoneNumber) return;
    const phone = encodeURIComponent(CONFIG.whatsapp.phoneNumber.replace(/[^0-9]/g, ''));
    const message = encodeURIComponent(CONFIG.whatsapp.message);
    const waUrl = `https://wa.me/${phone}?text=${message}`;

    if (this.whatsappDirectBtn) {
      this.whatsappDirectBtn.href = waUrl;
    }
    this.waUrl = waUrl;
  }

  attachEventListeners() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("#claim-hug-btn, #claim-hug-btn-page, .claim-hug-btn");
      if (btn) {
        e.preventDefault();
        this.claimHug();
      }
    });

    if (this.closeBtn) {
      this.closeBtn.addEventListener("click", () => {
        this.closeModal();
      });
    }

    if (this.modalBackdrop) {
      this.modalBackdrop.addEventListener("click", () => {
        this.closeModal();
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.modal && this.modal.classList.contains("is-visible")) {
        this.closeModal();
      }
    });

    if (this.whatsappDirectBtn) {
      this.whatsappDirectBtn.addEventListener("click", () => {
        sfx.playClick();
        if (this.statusText) {
          this.statusText.textContent = "Opening WhatsApp chat with him... 💕";
        }
        if (this.statusBox) {
          this.statusBox.classList.add("is-success");
        }
      });
    }
  }

  claimHug() {
    sfx.playHugClaim();
    this.launchFinaleShower();
    this.openModal();

    if (this.statusBox) {
      this.statusBox.classList.remove("is-success");
    }
    if (this.statusText) {
      this.statusText.textContent = "Sending hug confirmation to him...";
    }

    if (this.autoRedirectTimer) {
      clearTimeout(this.autoRedirectTimer);
    }

    this.autoRedirectTimer = setTimeout(() => {
      if (this.statusBox) {
        this.statusBox.classList.add("is-success");
      }
      if (this.statusText) {
        this.statusText.textContent = "Hug confirmation sent! (Tap button below if WhatsApp didn't open automatically) 💕";
      }

      if (this.waUrl) {
        try {
          const win = window.open(this.waUrl, "_blank");
          if (win) {
            win.focus();
          }
        } catch (_) {}
      }
    }, 1200);
  }

  launchFinaleShower() {
    const duration = 4000;
    const animationEnd = Date.now() + duration;
    const confettiColors = ["#E63946", "#F4ACB7", "#FFD166", "#FFFFFF", "#FF85A1", "#FFC2D1"];

    this.spawnFloatingHearts(24);

    const frame = () => {
      safeConfetti({
        particleCount: 5,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.75 },
        colors: confettiColors
      });

      safeConfetti({
        particleCount: 5,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.75 },
        colors: confettiColors
      });

      safeConfetti({
        particleCount: 4,
        angle: 90,
        spread: 110,
        origin: { x: 0.5, y: 0.2 },
        colors: confettiColors
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }

  spawnFloatingHearts(count = 20) {
    const emojis = ["❤️", "💖", "🥰", "✨", "💕", "🤗", "🌸"];
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const heart = document.createElement("div");
        heart.className = "floating-heart-particle";
        heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.left = `${Math.random() * 92 + 4}vw`;
        heart.style.fontSize = `${Math.random() * 1.5 + 1.2}rem`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
        document.body.appendChild(heart);

        setTimeout(() => {
          heart.remove();
        }, 5500);
      }, i * 140);
    }
  }

  openModal() {
    if (this.modal) {
      this.modal.classList.add("is-visible");
      this.modal.setAttribute("aria-hidden", "false");
    }
  }

  closeModal() {
    sfx.playClick();
    if (this.modal) {
      this.modal.classList.remove("is-visible");
      this.modal.setAttribute("aria-hidden", "true");
    }
  }
}

// Initialize Controllers on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  window.lockController = new LockScreenController();
  window.vinylPlayer = new VinylPlayerController();
  window.cakeController = new BirthdayCakeController();
  window.polaroidGallery = new PolaroidGalleryController();
  window.stickyNotesDispenser = new StickyNotesDispenserController();
  window.loveLetterEnvelope = new LoveLetterEnvelopeController();
  window.finaleController = new FinaleWhatsAppController();
});
