// // Hero.jsx
// import React from "react";
// import banner from "../assets/banner.jpeg";
// import "../Styles/Heros.css";

// const Hero = () => {
//   return (
//     <div className="hero layout">
//       {/* Left */}
//       <div className="hero-left">
//         <h1 className="hero-title">One Day One Lakh Challenge</h1>

//         <div className="hero-banner-wrapper">
//           <img src={banner} alt="Hero" className="hero-banner" />
//         </div>

//        <div className="hero-text-block">
//   <h4 className="hero-subtitle">
//     ஒரு நாள் – ஒரு லட்சம் சம்பாதிக்க Ready ஆ?
//   </h4>

//   <p className="hero-content">
//     💸 ஒரு நாள் – ஒரு லட்சம் சம்பாதிங்க <br />
//     🔴 பூஜ்ய ரூபாய் – பூஜ்ய ரிஸ்க் – பூஜ்ய முதலீடு <br />
//     <br />
//     🚀 இன்று தொடங்குங்க. இன்று உங்கள் வாழ்க்கையை மாற்றுங்க. <br />
//     💬 ஒரே ஒரு மெசேஜ்… ஒரு வாய்ப்பு… ஒரு புதிய எதிர்காலம். <br />
//     <br />
//     🧠 அனுபவம் தேவையில்லை. <br />
//     💯 சுத்தமான வளர்ச்சி. சுத்தமான வருமானம். <br />
//     <br />
//     📈 நாள் தின இலக்கு: ₹1,00,000 <br />
//     🤝 உங்க வேலை: Join → Learn → Earn <br />
//     <br />
//     🏆 Build Your Dream. Build Your Income. <br />
//     🛟 100% Support | 24/7 Guidance <br />
//     <br />
//     🔥 One Day One Lakh ஒரு வாக்குறுதி மட்டும் இல்ல… <br />
//     உங்கள் வாழ்க்கையை மாற்றும் பயணம். <br />
//     <br />
//     ✨ Start From Zero. Rise Like a Hero. <br />
//     ⏳ Your Time Starts Now. <br />
//     <br />
//     💰 வெறும் ₹499-க்கே சேருங்கள் <br />
//     🎁 ₹4,999 மதிப்புள்ள போனஸ் இலவசம் <br />
//     👉 குறைந்த இடங்கள் மட்டுமே – இப்போதே சேருங்கள்! <br />
//     🚨 இடங்கள் முடிந்ததும் மீண்டும் திறக்காது! <br />
//     <br />
//     🔗 உங்க நண்பர்களுக்கும் share பண்ணுங்க… அவர்களும் உங்களோட சேர்ந்து வளரட்டும்! 🤝🔥
//   </p>
// </div>

//       </div>

//       {/* Right */}
//       <div className="hero-right d-none d-lg-flex">
//         <div className="hero-card">
//           <h5 className="hero-card-title">Choose Your Option</h5>

//           <label className="hero-plan">
//             <input type="radio" checked readOnly />
//             <div className="hero-plan-text">
//               <h6>One Day One Lakh (499 + 18% GST)</h6>
//               <small>₹ 588.82</small>
//             </div>
//           </label>

//           <div className="hero-amount-row">
//             <span>Amount</span>
//             <span className="hero-amount">₹ 588.82</span>
//           </div>

//           <button className="hero-btn-primary">Register Now</button>

//           <button className="hero-btn-secondary">
//             <i className="bi bi-share"></i> Share this page
//           </button>
//         </div>
//       </div>

//       {/* Mobile bottom bar */}
//       {/* <div className="hero-mobile-bar d-lg-none">
//         <div className="hero-mobile-amount-row">
//           <span>Amount</span>
//           <span className="hero-amount">₹ 588.82</span>
//         </div>
//         <button className="hero-btn-primary w-100">Register Now</button>
//       </div> */}
//     </div>
//   );
// };

// export default Hero;
// Hero.jsx
import React from "react";
import banner from "../assets/banner.jpeg";
import "../Styles/Heros.css";

const Hero = () => {
  return (
    <div className="main">
      <div className="hero layout">
        {/* Left Side: Title + Banner Image (60% width) */}
        <div className="hero-left">
          <h1 className="hero-title">One Day One Lakh Challenge</h1>
          <div className="hero-banner-wrapper">
            <img src={banner} alt="Hero" className="hero-banner" />
          </div>
        </div>

        {/* Right Side: Payment Box */}
        <div className="hero-right">
          <div className="hero-card">
            <h5 className="hero-card-title">Choose Your Option</h5>

            <label className="hero-plan">
              <input type="radio" checked readOnly />
              <div className="hero-plan-text">
                <h6>One Day One Lakh (499 + 18% GST)</h6>
                <small>₹ 588.82</small>
              </div>
            </label>

            <div className="hero-amount-row">
              <span>Amount</span>
              <span className="hero-amount">₹ 588.82</span>
            </div>

            <button className="hero-btn-primary">Register Now</button>

            <button className="hero-btn-secondary">
              <i className="bi bi-share"></i> Share this page
            </button>
          </div>
        </div>
      </div>

      <div className="hero-text-block">
        <h4 className="hero-subtitle">ஒரு நாள் – ஒரு லட்சம் சம்பாதிக்க Ready ஆ?</h4>

        <p className="hero-content">
          💸 ஒரு நாள் – ஒரு லட்சம் சம்பாதிங்க <br />
          🔴 பூஜ்ய ரூபாய் – பூஜ்ய ரிஸ்க் – பூஜ்ய முதலீடு <br />
          <br />
          🚀 இன்று தொடங்குங்க. இன்று உங்கள் வாழ்க்கையை மாற்றுங்க. <br />
          💬 ஒரே ஒரு மெசேஜ்… ஒரு வாய்ப்பு… ஒரு புதிய எதிர்காலம். <br />
          <br />
          🧠 அனுபவம் தேவையில்லை. <br />
          💯 சுத்தமான வளர்ச்சி. சுத்தமான வருமானம். <br />
          <br />
          📈 நாள் தின இலக்கு: ₹1,00,000 <br />
          🤝 உங்க வேலை: Join → Learn → Earn <br />
          <br />
          🏆 Build Your Dream. Build Your Income. <br />
          🛟 100% Support | 24/7 Guidance <br />
          <br />
          🔥 One Day One Lakh ஒரு வாக்குறுதி மட்டும் இல்ல… <br />
          உங்கள் வாழ்க்கையை மாற்றும் பயணம். <br />
          <br />
          ✨ Start From Zero. Rise Like a Hero. <br />
          ⏳ Your Time Starts Now. <br />
          <br />
          💰 வெறும் ₹499-க்கே சேருங்கள் <br />
          🎁 ₹4,999 மதிப்புள்ள போனஸ் இலவசம் <br />
          👉 குறைந்த இடங்கள் மட்டுமே – இப்போதே சேருங்கள்! <br />
          🚨 இடங்கள் முடிந்ததும் மீண்டும் திறக்காது! <br />
          <br />
          🔗 உங்க நண்பர்களுக்கும் share பண்ணுங்க… அவர்களும் உங்களோட சேர்ந்து வளரட்டும்! 🤝🔥
        </p>
      </div>
    </div>
  );
};

export default Hero;
