import './App.css';

function App() {
  return (
    <div className="App">
      <header>
          <h1>Lab 10 Problem 3: React Project</h1>
      </header>
      <main>
        <section className="Introduction">
          <h2>Intro</h2>
          <p>
              The framework I chose to use was React. This entire page was made using a combincation of React, CSS, JavaScript, and <a href="https://vercel.com/">Vercel.</a> It will cover the process of building the page including how the framework was installed, how it was designed, and overcoming challenges found. 
          </p>
        </section>
        <section className="Installation">
          <h2>Installation process</h2>
              <p>
                  In order to use React I first had to install Node.js on my computer. I retrieved it from the <a href="https://nodejs.org/en">official website</a> to install the latest version. Afterwards, I used VS Code to edit and build my webpage. 
              </p>
        </section>
        <section className="Building">
          <h2>Building my webpage</h2>
          <p>
              Before even uploading to GitHub, I first worked on the content of the website. The following steps are what I did to create my website:
          </p>
          <ol>
              <li>
                  I used the following command in the VS Code terminal to create my React App. It took a couple minutes for it to load everything, but this generated the necessary files for my webpage. This also Initialized the app as a git repository.
              </li>
              <pre><code>npx create-react-app lab10</code></pre> 
              <li>
                  After creating the app, I next had to enter the directory. This ensured that the git commands I later use properly work.
                  <pre><code>cd lab10</code></pre>
              </li>
              <li>
                  Next came the actual webpage development. Once ensuring that the page could be hosted locally, I filled in the content of the page using a JavaScript file. From within the file I also imported a related CSS file to handle the design/format of the webpage.
              </li>
          </ol>
        </section>
        <section className="Connecting and Hosting">
          <h2>Connecting and Hosting my Webpage</h2>
            <p>
                Once I finished building the webpage locally, I then had to connect the React app to my GitHub for hosting. A dedicated repository was created in advance.
            </p>
            <ol>
                <li>
                    First I needed to build the page. This was executed with the following command:
                </li>
                <pre><code>npm run build</code></pre> 
                <li>
                    Next, I had to connect the React app to the dedicated repository. In this way, I pushed all changes I made to the app to the repository. Since I was adding an existing repository to it, the commands I used these commands:
                    <pre><code>git remote add origin https://github.com/DavidZCharles/lab10.git</code></pre>
                    <pre><code>git branch -M main</code></pre>
                    <pre><code>git push -u origin main</code></pre>
                </li>
                <li>
                    Afterwards, I needed to link the project to Vercel to host the webpage. This was done by simply using the command:
                    <pre><code>vercel</code></pre>
                </li>
                <li>
                    Finally, all that was left was to deploy the app. Through Vercel, I needed to use the next command to successfully deploy my webpage
                    <pre><code>vercel --prod</code></pre> 
                </li>
            </ol>
        </section>
        <section className="Challenges">
            <h2>Challenges I Faced</h2>
            <p>
                Throughout the development, I ran into two main problems. 
                The first was the most problematic as it involved the deployment 
                of my React app. Initially, I planned on using GitHub Pages, however 
                I was not able to get it running. Despite following the official 
                tutorial step by step, it consistently failed to 
                fetch my origin URL upon deployment. The error kept saying I needed to run the command 
                in a GitHub repository, which it was, or further specified in the build 
                script. I'm quite familiar with the deployment process through GitHub 
                pages now but still not sure why it was unable to complete on my computer. 
                I tried various troubleshooting methods for people who ran into the same issue 
                as me and nothing worked. Eventually, I switched to Vercel which was much 
                easier to accomplish. On the first attempt it successfully hosted my website.
            </p>
            <p>
                The second issue had to do with the size of the files. Part of my 
                troubleshooting process involved having to delete the node modules 
                folder and reinstalling it. Due to the number of files within the folder, 
                completing the whole process on my computer would always take about an hour. 
                Since I had to try this multiple times to see if it would fix 
                my previous issue, I ended up wasting hours just waiting for my files to 
                be deleted and installed. A couple of times I also attempted to start from scratch, 
                meaning deleting the entire react app folder and creating it again. This 
                process also took about an hour to complete so I tried to avoid doing it 
                as much as possible. I realized at the end that my computer would take so 
                long to handle all these files because I was saving them on a personal USB. 
                I tried switching to my other hard drive which is an SSD and noticed the time 
                to delete and install reduced significantly.
            </p>
        </section>
        <footer><small>© 2024 DZFC</small></footer>
      </main>
    </div>
  );
}

export default App;
