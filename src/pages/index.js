import { Link } from "gatsby-theme-material-ui"
import React from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"


class IndexPage extends React.Component {
  state = { loading: false, msg: null }
  handleClick = e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/token-hider")
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.message }))
  }

  render() {
    const { loading, msg } = this.state

    const exampleCode = `
      import React, { useEffect } from "react";
      import Prism from "prismjs";
      import "prismjs/themes/prism-tomorrow.css";
      import "./styles.css";

      export default function Code({ code, language }) {
        useEffect(() => {
          Prism.highlightAll();
        }, []);
        return (
          <div className="Code">
            <pre>
              <code className="language-javascript">{code}</code>
            </pre>
          </div>
        );
      }
      `
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p>
              Welcome to your new Gatsby + Netlify Functions + Netlify Identity
              site
            </p>
            <ul>
              <li>
                This site has statically generated marketing pages like this one
                and <Link to="/page-2/">page 2.</Link>{" "}
              </li>
              <li>
                It also has a dynamically generated clientside app guarded by
                authentication:
                <ul>
                  <li>
                    <Link to="/app/">
                      <b>Go to App (with Netlify Identity)</b>
                    </Link>{" "}
                  </li>
                </ul>
              </li>
              <li>
                You can{" "}
                <a
                  className="leading-relaxed font-medium items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded-md bg-blue-600 text-blue-100 border-blue-600 hover:bg-blue-700 hover:border-blue-700 hover:text-white px-3 py-2"
                  href="https://github.com/sw-yx/jamstack-hackathon-starter"
                >
                  view source here
                </a>
              </li>
              <li>
                or see{" "}
                <a
            
                       className="leading-relaxed font-medium items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded-md bg-blue-600 text-blue-100 border-blue-600 hover:bg-blue-700 hover:border-blue-700 hover:text-white px-3 py-2"
       
                            href="https://youtu.be/bueXJInQt2c"
                
                >
                  the Youtube walkthrough
                </a>
              </li>
              <li>
                or
                <a href="https://app.netlify.com/start/deploy?repository=https://github.com/sw-yx/jamstack-hackathon-starter&stack=cms">
                  <img
                    src="https://www.netlify.com/img/deploy/button.svg"
                    alt="Deploy to Netlify"
                  />
                </a>
              </li>
            </ul>
            <hr />
            <div className="Code">
            <pre>
              <code className="language-javascript">{exampleCode}</code>
            </pre>
          </div>
            <p>
              You can still access Netlify functions even on static "marketing
              pages". This function is available at{" "}
              <a href="/.netlify/functions/token-hider">
                <code>/.netlify/functions/token-hider</code>
              </a>{" "}
              and it uses an API_SECRET environment variable that is hidden from
              the frontend!
            </p>
            <button className="leading-relaxed font-medium items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded-md border-pink-600 text-pink-600 hover:bg-gray-100 hover:bg-opacity-10 hover:border-pink-600 hover:text-white px-3 py-2" onClick={this.handleClick}>
              {loading ? "Loading..." : "Call Lambda Function"}
            </button>
            <br />

            {msg ? (
              <img src={msg[Math.floor(Math.random() * 10)]} alt="dog"></img>
            ) : (
              <pre>"Click the button and watch this!"</pre>
            )}
          </div>
          <div
            style={{
              borderLeft: "brown",
              borderLeftStyle: "dashed",
              paddingLeft: "3rem",
            }}
          >
            <p>Now go build something great.</p>
            <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}>
              <Image />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
