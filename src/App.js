import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
          <h1>Lab 10c React Project</h1>
      </header>
      <main>
        <section className="Introduction">
          <h2>Intro</h2>
          <p>
              The framework I chose to use was React. This entire page was made using
              a combincation of React, CSS, JavaScript, and GitHub Pages. It will cover 
              the process of building the page including how the framework was installed, 
              how it was designed, and overcoming challenges found. 
          </p>
        </section>
        <section className="Installation">
          <h2>Installation process</h2>
              <p>
                  In order to use React I first had to install Node.js on my computer.
                  I retrieved it from the <a href="https://nodejs.org/en">official website</a>
                  to install the latest version. Afterwards, I used VS Code to edit and build
                  my webpage. 
              </p>
        </section>
        <section className="Building">
          <h2>Building my webpage</h2>
          <p>
              Before even uploading to GitHub, I first worked on the content
              of the website. The following steps are what I did to create 
              my website:
          </p>
          <ol>
              <li>
                  I used the following command in the VS Code terminal 
                  to create my React App. It took a couple minutes for 
                  it to load everything, but this generated the necessary 
                  files for my webpage.
              </li>
              <pre><code>npx create-react-app lab10</code></pre> 
              <li>
                  After creating the app, I next had to enter the directory and locally tested it runs.
                  To do this I then entered the following commands to enter the development server. This
                  opened on my local browser, displaying the default template.
                  <pre><code>cd lab10
npm start</code></pre>
              </li>
              <li>
                  Next came the actual webpage development. Once ensuring that the page
                  could be hosted locally, I filled in the content of the page using
                  a JavaScript file. From within the file I also imported a related CSSnpx create-react-app lab10
                  file to handle the design/format of the webpage.
              </li>
          </ol>
        </section>
        <section className="Connecting and Hosting">
          <h2>Connecting and Hosting my Webpage</h2>
            <p>
                Once I finished building the webpage locally, I then had to connect the 
                React app to my GitHub for hosting. A dedicated repository was created in advance.
            </p>
            <ol>
                <li>
                    First I began by creating a dedicated gh-pages Branch. Using the following
                    command created and switched to the gh-pages branch. I did this to explicitly
                    ensure that a gh-pages branch was being generated.
                </li>
                <pre><code>git checkout --orphan gh-pages</code></pre> 
                <li>
                    Afterwards, I needed to update the package.json file for my React App. This involved
                    adding the following properites to the file
                    <pre><code>"homepage": "https://DavidZCharles.github.io/lab10"
"predeploy": "npm run build",
"deploy": "gh-pages -d build"</code></pre> 
                </li>
                <li>
                    I then needed to push the code to GitHub, using these series of commands
                    <pre><code>git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/DavidZCharles/lab10.git
git branch -M main
git push -u origin main</code></pre>
                </li>
                <li>
                    Next I installed the gh-pages package. This command should have also created
                    the branch but for safety was done manually.
                    <pre><code>npm install gh-pages --save-dev</code></pre> 
                </li>
                <li>
                    Finally, all that was left was to deploy the app. This was done with a simple command.
                    <pre><code>npm run deploy</code></pre> 
                </li>
            </ol>
        </section>
        <section className="Challenges">
            <h2>Challenges I Faced</h2>
            <p>
                Throughout the entire webpage development I only ran into one major issue. This unfortunately
                only happened when I needed to deploy the app, which is the final step to hosting this webpage.
                Whenever I ran the deploy command, it always resulted in the following error:
                <pre><code>Failed to get remote.origin.url (task must either be run 
in a git repository with a configured origin remote or 
must be configured with the "repo" option).</code></pre>
                I turned to many online forums trying to resolve this issue and it took me a couple hours to resolve.
                This is because many steps involved either cloning or reinstalling the node modules entirely. Due to 
                size of the files it took more time to delete and install them than the entire process of building the 
                webpage. It was very frustrating at first since most solutions found to my issue were steps that I already 
                covered and verified numerous times. This involved constant changes to the origin repo url. Eventually, 
                what got my webpage to finally deploy was by doing the following:
            </p>
        </section>
      </main>
    </div>
  );
}

export default App;
