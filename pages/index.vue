<script setup lang="ts">
</script>

<template>

  <div class="overflow-hidden">
    <Hero :cta="[
      { text: 'Find out more', link: '/' },
      { text: 'See some of our work', link: '/' },
    ]">
      <template #title>
        We create bespoke software for established businesses to increase operational efficiency.
      </template>
    </Hero>

    <SolutionSection
      :solutions="[
        { headline: 'Web Development', name: 'Web Development', image: 'cyberwall-app.jpg', blob: 'top-right' },
        { headline: 'Web Development', name: 'Bespoke Shopify Theme', image: 'cyberwall-app.jpg', blob: 'top-right' },
        { headline: 'Web Development', name: 'Web Development', image: 'cyberwall-app.jpg', blob: 'bottom-right' }
      ]"
    />

    <ServiceSection 
      title="who we are"
      :services="[
        { name: 'Web Development', blob: 1, icon: 'Web', description: 'We create bespoke software for established businesses to increase operational efficiency.' },
        { name: 'Web Development', blob: 2, icon: 'Web', description: 'We create bespoke software for established businesses to increase operational efficiency.' },
        { name: 'Web Development', blob: 3, icon: 'Web', description: 'We create bespoke software for established businesses to increase operational efficiency.' },
        { name: 'Web Development', blob: 4, icon: 'Web', description: 'We create bespoke software for established businesses to increase operational efficiency.' }
      ]"
    />

    <AboutSection
      title="2015"
      heading="We started as a small team of developers"
      image="cyberwall-app.jpg"
      link="/"
    >
      We passionately believe that technology, specifically cloud connected technology, is here to help – not hinder – us. This is the foundation upon which Adapt was formed in February 2015. Since then, we have been imagining creative ways to solve an infinite variety of problems for an ever expanding portfolio of clients. 
    </AboutSection>

    <TeamSection 
      title="Our Team"
      :slides="[
        { text: 'Ciao ciao', image: 'cyberwall-app.jpg', link: '/' },
        { text: 'Ciao ciao', image: 'cyberwall-app.jpg', link: '/' },
        { text: 'Ciao ciao', image: 'cyberwall-app.jpg', link: '/' },
        { text: 'Ciao ciao', image: 'cyberwall-app.jpg', link: '/' },
        { text: 'Ciao ciao', image: 'cyberwall-app.jpg', link: '/' },
        { text: 'Ciao ciao', image: 'cyberwall-app.jpg', link: '/' },
        { text: 'Ciao ciao', image: 'cyberwall-app.jpg', link: '/' },
        { text: 'Ciao ciao', image: 'cyberwall-app.jpg', link: '/' },
        { text: 'Ciao ciao', image: 'cyberwall-app.jpg', link: '/' },
        { text: 'Ciao ciao', image: 'cyberwall-app.jpg', link: '/' },
        { text: 'Ciao ciao', image: 'cyberwall-app.jpg', link: '/' }
      ]"
    />
  </div>
  
</template>
