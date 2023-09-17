import './Events.css'
import events from './experiences/events.json?url'

function Events() {
  console.log(events);

  fetch(events).then(result => console.log(result));

  return (
    <div>
        <div id="app">
        <div className="body">
            <section>
            <div className="section__head">
                <h2>Expériences Professionnelles</h2>
            </div>
            <div className="event-list">
                <div className="event">
                <h3 className="event__header"><span className="event__dates">Nov 2021 - today</span>
                    <span lang="en">DevOPS Engineer</span> <div className="event__subtitle">TechSoft3D</div>
                </h3>
                <ul className="event__description">
                    <li>Monitoring setup with grafana & prometheus</li>
                    <li>Infrastructure management with terraform and ansible</li>
                    <li>Azure DevOPS CICD / Jenkins CICD</li>
                    <li>Azure & AWS</li>
                </ul>
                <h3 className="event__header"><span className="event__dates">Janvier 2021 - Nov 2021</span>
                    <span lang="en">Tech lead</span> <div className="event__subtitle">Pôle emploi (DSI Nantes) - accessibilité numérique
                    </div>
                </h3>
                <ul className="event__description">
                    <li>Assure le rôle de <span lang="en">scrum master</span></li>
                    <li>Accompagnement de l'équipe de développement lors de revues de code et de sessions de <span lang="en">pair programming</span></li>
                    <li>Mise en conformité du <span lang="en">framework</span> <a href="https://valor-software.com/ngx-bootstrap/#/">ngx-bootstrap</a> au RGAA (<span lang="en">fork</span> interne)</li>
                    <li>Livraison des applications de démonstrations et de test sur Kubernetes</li>
                    <li>Mise en place de l'intégration continue</li>
                    <li>Réalisation des tests unitaires et d'intégration</li>
                </ul>
                <span className="tech_stack">
                    <span className="tech_stack__label">Technologies : </span>
                    Angular, Concourse, monorepo NX, Jest, Playwright, Cypress, Quarkus, Mockserver, JPA, PostgreSQL, Kubernetes, Docker, Material design, Bootstrap
                </span>
                </div>
                <div className="event">
                <h3 className="event__header"><span className="event__dates">2019 - 2021</span>
                    Concepteur développeur <div className="event__subtitle">Pôle emploi (DSI Nantes) -
                    <a href="https://pole-emploi.io/">pole-emploi.io</a></div>
                </h3>
                <ul className="event__description">
                    <li>Conception et développement de l'application et de son <span lang="en">design system</span></li>
                    <li>Conception et développement du <span lang="en">backend</span></li>
                    <li>Intégration des maquettes du graphiste en <span lang="en">mobile first</span></li>
                    <li>Mise en place des tests d'intégration</li>
                    <li>Mise en place du Storybook de l'équipe</li>
                    <li>Réalisation de la migration de l'environnement depuis des VM vers le <span lang="en">cloud</span> (kubernetes)</li>
                    <li>Sensibilisation de l'équipe à l'accessibilité numérique</li>
                    <li>Prise en charge du chantier d'automatisation de l'équipe et initiation de l'équipe au
                    TDD / tests d'intégrations</li>
                </ul>
                <span className="tech_stack">
                    <span className="tech_stack__label">Technologies : </span>
                    Angular, Stencil, Jenkins, GitlabCI, Storybook, Cypress, Postman, Weblogic, PostgreSQL, Kubernetes, Docker, Flyway, Material design
                </span>
                </div>
                <div className="event">
                <h3 className="event__header"><span className="event__dates">2016 - 2019</span>
                    Concepteur développeur puis Tech lead frontend <div className="event__subtitle">Pôle emploi
                    (DSI Nantes) - Service Data Science</div>
                </h3>
                <ul className="event__description">
                    <li>Equipe gagnante du hackathon design4green (section pro) 2017 & 2018</li>
                    <li>Développement d'une application interne de gestion des compétences</li>
                    <li>Encadrement et accompagnement des collaborateurs, revues de codes et présentations
                    techniques</li>
                    <li>Mise en place de <span lang="en">pipelines</span> d'intégration continue</li>
                    <li>Conception et développement de composants transverse à la DSI</li>
                    <li>Mise en place des différentes applications vitrines de l'équipe</li>
                </ul>
                <span className="tech_stack">
                    <span className="tech_stack__label">Technologies : </span>
                    Angular, Stencil, Jenkins, Karma, Jest, Protractor, Design System, Material design, Bootstrap, Dataviz (d3 / viz.js / antv)
                </span>
                </div>
                <div className="event">
                <h3 className="event__header"><span className="event__dates">2015 - 2016</span>
                    Concepteur développeur en alternance <div className="event__subtitle">Pôle emploi (DSI
                    Nantes) - Département PITH</div>
                </h3>
                <ul className="event__description">
                    <li>Développement en angularjs / nodejs avec une base de données MySQL</li>
                    <li>Intégration d'une application complète en autonomie</li>
                </ul>
                <span className="tech_stack">
                    <span className="tech_stack__label">Technologies : </span>
                    Angularjs, Gulp, Karma, NodeJS, MySQL, Express
                </span>
                </div>
            </div>
            </section>
            <section>
            <div className="section__head">
                <h2>Extra professionnel</h2>
            </div>
            <div className="event-list">
                <div className="event">
                <h3 className="event__header"><span className="event__dates">2008 - 2015</span>
                    Animateur multimédias bénévole <div className="event__subtitle">CCMVS</div>
                </h3>
                </div>
                <div className="event">
                <h3 className="event__header"><span className="event__dates">2008 - 2013</span>
                    Professeur particulier de mathématiques <div className="event__subtitle"></div>
                </h3>
                </div>
                <div className="event">
                <h3 className="event__header"><span className="event__dates">2014</span>
                    Formateur en informatique stagiaire <div className="event__subtitle">Les mulots informatique
                    </div>
                </h3>
                </div>
            </div>
            </section>
            <section>
            <div className="section__head">
                <h2>Formations</h2>
            </div>
            <div className="event-list">
                <div className="event">
                <h3 className="event__header"><span className="event__dates">2015</span>
                    Licence Pro S2IMa (Système d’Information Intégration et Maintenance applicative) <div
                    className="event__subtitle">Université de Bretagne Sud (Vannes)</div>
                </h3>
                </div>
                <div className="event">
                <h3 className="event__header"><span className="event__dates">2010</span>
                    Deug de mathématiques <div className="event__subtitle">Université de Rennes 1</div>
                </h3>
                </div>
                <div className="event">
                <h3 className="event__header"><span className="event__dates">2008</span> Bac S
                    Spécialité mathématiques mention AB <div className="event__subtitle">Lycée Jean-Brito
                    (Bain-de-Bretagne)</div>
                </h3>
                </div>
            </div>
            </section>
        </div>
        </div>

    </div>
  )
}

export default Events
