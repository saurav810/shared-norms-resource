import { useEffect, useState } from 'react'
import './App.css'
import Accordion from './components/Accordion'
import Alert from './components/Alert'
import Breadcrumbs from './components/Breadcrumbs'
import CardGrid from './components/CardGrid'
import ReflectionQuestions from './components/ReflectionQuestions'
import RelatedResourceCTA from './components/RelatedResourceCTA'
import ResourceHeader from './components/ResourceHeader'
import SideNavigation from './components/SideNavigation'
import {
  behaviorCards,
  navigationItems,
  norms,
  questions,
  valueCards,
} from './data/resourceContent'

function useHeightMessenger() {
  useEffect(() => {
    let frame
    const sendHeight = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        window.parent?.postMessage(
          {
            type: 'rn-resource-height',
            height: document.documentElement.scrollHeight,
          },
          '*',
        )
      })
    }

    sendHeight()
    window.addEventListener('load', sendHeight)
    window.addEventListener('resize', sendHeight)
    const observer = new ResizeObserver(sendHeight)
    observer.observe(document.documentElement)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('load', sendHeight)
      window.removeEventListener('resize', sendHeight)
      observer.disconnect()
    }
  }, [])
}

function App() {
  const [activeSection, setActiveSection] = useState(navigationItems[0].id)
  useHeightMessenger()

  useEffect(() => {
    const sections = navigationItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-15% 0px -68% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <ResourceHeader />
      <Breadcrumbs />

      <div className="page-shell">
        <SideNavigation items={navigationItems} activeSection={activeSection} />
        <main id="main-content" className="resource-main" tabIndex="-1">
          <section id="overview" className="content-section section-intro" aria-labelledby="overview-title">
            <h2 id="overview-title">Overview</h2>
            <p className="lead">
              Major technology and modernization projects are rarely just technology projects. Success often depends on how people communicate, make decisions, share accountability, and work through uncertainty together.
            </p>
            <p>
              These norms, values, and behaviors were developed by a 20-person cross-functional steering committee in Burlington, Vermont as the city prepared to implement a new enterprise resource planning system.
            </p>
            <p>
              The agreements provided a shared foundation for communication, decision-making, and accountability during a period of uncertainty and organizational change. They can also serve as a practical starting point for other teams working across departments.
            </p>
            <Alert title="Use this with your team">
              Consider reviewing these norms during a project kickoff, steering committee meeting, or planning session before a major implementation effort begins.
            </Alert>
          </section>

          <section id="shared-norms" className="content-section" aria-labelledby="norms-title">
            <h2 id="norms-title">Shared Norms for Working Through Change</h2>
            <Accordion items={norms} />
            <Alert title="Try this">
              At your next project meeting, ask: Which of these norms do we already practice well, and which one would most improve how we work together?
            </Alert>
          </section>

          <section id="shared-values" className="content-section" aria-labelledby="values-title">
            <h2 id="values-title">Shared Values That Support Change</h2>
            <p className="section-description">Burlington&apos;s steering committee also identified six values to guide the implementation. These values help teams evaluate choices consistently throughout a complex implementation.</p>
            <CardGrid items={valueCards} type="values" />
          </section>

          <section id="behaviors" className="content-section" aria-labelledby="behaviors-title">
            <h2 id="behaviors-title">Behaviors That Bring Values to Life</h2>
            <p className="section-description">Values only matter if they are reflected in everyday behaviors. The team backed up the values and norms by getting tactical in outlining the behaviors that align to their goals. They determined that successful change efforts often emphasize:</p>
            <CardGrid items={behaviorCards} type="behaviors" />
          </section>

          <section id="questions" className="content-section" aria-labelledby="questions-title">
            <h2 id="questions-title">Questions for Consideration</h2>
            <p className="section-description">As you prepare for the next change effort, consider the following questions.</p>
            <ReflectionQuestions questions={questions} />
          </section>

          <section id="related-resource" className="content-section related-section" aria-labelledby="related-title">
            <RelatedResourceCTA />
          </section>
        </main>
      </div>

      <footer className="site-footer">
        <div className="footer-inner">
          <p>
            This resource was authored by{' '}
            <a href="https://resultsnetwork.results4america.org/users/6783901">Scot Barker</a> with the help of{' '}
            <a href="https://resultsnetwork.results4america.org/users/6772641">Madeleine Weatherhead</a> for The{' '}
            <strong>Results Network. Results Network</strong> is a community for government leaders seeking to{' '}
            <strong>find</strong>, <strong>fund</strong>, and <strong>implement</strong> proven economic mobility solutions.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
