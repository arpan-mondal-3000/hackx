import React from 'react'
import HackathonCard from "../../components/HackathonCard"
import './landingPage.css'

const LandingPage = () => {
  return (
    <>
      <div id='card' className='grid p-8 lg:grid-cols-4 justify-items-center gap-5'>
      <HackathonCard
        name="Hackathon Name"
        imgSrc="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        themes={["Web3", "Mobile", "Dev"]}
        desc="This is the short description of the hackathon."
      />
      <HackathonCard
        name="Hackathon Name"
        imgSrc="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        themes={["Web3", "Mobile", "Dev"]}
        desc="This is the short description of the hackathon."
      />
      <HackathonCard
        name="Hackathon Name"
        imgSrc="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        themes={["Web3", "Mobile", "Dev"]}
        desc="This is the short description of the hackathon."
      />
      <HackathonCard
        name="Hackathon Name"
        imgSrc="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        themes={["Web3", "Mobile", "Dev"]}
        desc="This is the short description of the hackathon."
      />
      <HackathonCard
        name="Hackathon Name"
        imgSrc="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        themes={["Web3", "Mobile", "Dev"]}
        desc="This is the short description of the hackathon."
      />
      <HackathonCard
        name="Hackathon Name"
        imgSrc="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        themes={["Web3", "Mobile", "Dev"]}
        desc="This is the short description of the hackathon."
      />
      <HackathonCard
        name="Hackathon Name"
        imgSrc="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        themes={["Web3", "Mobile", "Dev"]}
        desc="This is the short description of the hackathon."
      />
      </div>
    </>
  )
}

export default LandingPage;