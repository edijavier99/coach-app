import React from "react";
import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { PopupWidget } from "react-calendly";
import { Introduction } from "../components/introduction";
import {Services} from "../components/services"
import { ServiceCard } from "../components/serviceCard";
import { Newsletter } from "../components/newsletter";
import { Footer } from "../components/footer";
import { Prices } from "../components/prices";
import { Reviews } from "../components/reviews";

function Home() {
  const dietDescription = "Get personalized diet plans tailored to your nutritional needs. Our experts will create a customized diet plan based on your dietary preferences, health goals, and lifestyle.";
  const routinesDescription = "Discover personalized workout routines designed to help you achieve your fitness goals. Our fitness experts will create a tailored exercise plan that suits your fitness level, preferences, and objectives.";
  const mindHealthDescription = "Experience treatments focused on improving mental health and well-being. Our mental health professionals offer a range of therapies and techniques to help you manage stress, anxiety, and other mental health challenges.";
   
  return (
    <section>
      <PopupWidget
        url="https://calendly.com/edijavier10"
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      />
      <Hero />
      <Introduction />
      <Services/>
      <ServiceCard
          title="Personalized Diet"
          category="Nutrition"
          description={dietDescription}
          delayTime={3000}
          identification={"health"}
          imgOne ="https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imgTwo="https://images.unsplash.com/photo-1611077543575-445af69a7adf?w=900&auto=format&fit=crop&q=60&ix%3D"
          imgThree="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1753&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <ServiceCard
          title="Personalized Routines"
          category="Fitness"
          description={routinesDescription}
          reverse={true}
          delayTime={4500}
          identification={"fitness"}
          imgOne ="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imgTwo="https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imgThree="https://plus.unsplash.com/premium_photo-1674605365723-15e6749630f4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <ServiceCard
          title="Mind Health Treatment"
          category="Mindset"
          description={mindHealthDescription}
          delayTime={3000}
          identification={"mindset"}
          imgOne ="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWF0aW9ufGVufDB8fDB8fHww"
          imgTwo="https://plus.unsplash.com/premium_photo-1682097294168-bb76a42b74c8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imgThree="https://images.unsplash.com/photo-1514415008039-efa173293080?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Prices/>
      <Reviews/>
      <Newsletter />
    </section>
  );
}

export default Home;
