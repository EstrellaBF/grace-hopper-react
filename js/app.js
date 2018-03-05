// Se encapsulan en funciones autoejecutables para que no afecten entre sí
(()=> {
// Se creará por temas de practica, el header por React
class Header extends React.Component {
  render() {
    return (
      <h1>grace-hopper</h1>
    );
  }
}
ReactDOM.render(<Header />, document.querySelector('header'));

})();

(()=>{
  class Phrase extends React.Component {
    render() {
      return (
        <div>
          <h2>Phrase</h2>
          <blockquote cite="http://http://www.azquotes.com/quote/553883">Humans are allergic to change. They love to say, 'We've always done it this way.' I try to fight that. That's why I have
            a clock on my wall that runs counter-clockwise.
          </blockquote>
          <a href="information.html" target="_blank">See more</a>
        </div>
      );
    }
  }

  class Career extends React.Component {
    render() {
      return (
        <div>
        <h3>Career</h3>
        <ol>
          <li>World War</li>
          <li>UNIVAC</li>
          <li>COBOL</li>
          <li>Standars</li>
        </ol>
        </div>
      );
    }
  } 

  class Biography extends React.Component {
    render() {
      return (
        <div>
        <p><strong>Grace Brewster Murray Hopper</strong> (née <strong>Murray</strong>; December 9, 1906 – January 1, 1992) was an American <a href="https://en.wikipedia.org/wiki/Computer_scientist" target="_blank">computer scientist</a> and United States Navy rear admiral.[1]
        <mark>One of the first programmers of the Harvard Mark I computer</mark>, she was a pioneer of computer programming who invented one of the first compiler related tools. She popularized the idea of machine-independent programming languages, which
        led to the development of <a href="https://en.wikipedia.org/wiki/COBOL">COBOL</a>, an early <a href="https://en.wikipedia.org/wiki/High-level_programming_language">high-level programming language</a> still in use today.
        </p>
        <p>Hopper had attempted to enlist in the Navy during <a href="https://en.wikipedia.org/wiki/World_War_II">World War II</a>, but she was rejected by the military because she was 34 years of age and too old to enlist. She instead
          joined the Navy Reserves. Hopper began her computing career when she worked on the Harvard Mark I team that was led
          by Howard H. Aiken. In 1949, she joined the
          <a href="https://en.wikipedia.org/wiki/Eckert%E2%80%93Mauchly_Computer_Corporation">Eckert–Mauchly Computer Corporation</a> and was part of the development team that designed the
          <a href="https://en.wikipedia.org/wiki/UNIVAC_I">UNIVAC</a> I computer in 1944. It was at Eckert–Mauchly that she began developing the compiler. She believed that computer
          code could be written in English by using a programming language that was based on English words. The compiler would
          convert that code into machine code that would be understood by computers.a By 1952, Hopper finished her compiler,
          which was written for the A-0 System programming language.[2][3][4][5]</p>
          <p>In 1954, Eckert–Mauchly chose Hopper to lead their department for automatic programming, and she led the release of some
          of the first compiled languages like
          <a href="https://en.wikipedia.org/wiki/FLOW-MATIC">FLOW-MATIC</a>. In 1959, she participated in the CODASYL consortium, which consulted Hopper to guide them in creating
          a machine-independent programming language. This led to the COBOL language, which was inspired by her idea of a language
          being based on English words. In 1966, she retired from the Naval Reserve, but in 1967, the Navy recalled her to active
          duty. She retired from the Navy in 1986 and found work as a consultant for the
          <a href="https://en.wikipedia.org/wiki/Digital_Equipment_Corporation">Digital Equipment Corporation</a>, sharing her computing experiences.</p>
          <p>Owing to her accomplishments and her naval rank, she was sometimes referred to as "Amazing Grace".[6][7] The U.S. Navy
          <a href="https://en.wikipedia.org/wiki/Arleigh_Burke-class_destroyer">Arleigh Burke-class</a> guided-missile destroyer USS Hopper was named for her, as was the Cray XE6 "Hopper" supercomputer
          at NERSC.[8] During her lifetime, Hopper was awarded 40 honorary degrees from universities across the world. In 1991,
          she received the
          <a href="https://en.wikipedia.org/wiki/National_Medal_of_Technology_and_Innovation">National Medal of Technology</a>. On November 22, 2016, she was posthumously awarded the
          <a href="https://en.wikipedia.org/wiki/Presidential_Medal_of_Freedom">Presidential Medal of Freedom</a> by President Barack Obama.[9]</p>
          <Career/>
          <Phrase/>
        </div>
      );
    }
  }

  ReactDOM.render(<Biography/>, document.getElementById('biography'));
})();

(()=>{
  class Table extends React.Component {
    render() {
      return (
        <table className="summary-table">
          <thead>
            <tr>
              <th colSpan="2">Grace Murray Hopper</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2">
                <img src="assets/docs/grace-hopper.jpg" alt="Grace Hopper"/>
                <p>Rear Admiral Grace M. Hopper, 1984</p>
                <tr>
                  <th>Nickname</th>
                  <td>"Amazing Grace"</td>
                  <tr>
                    <th>Born</th>
                    <td>December 9, 1906</td>
                    <tr>
                      <th>Died</th>
                      <td>January 1, 1992 (aged 85)</td>
                      <tr>
                        <th>Allegiance</th>
                        <td>
                          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png" alt="USA"/> United States of America
                        </td>
                      </tr>
                    </tr>
                  </tr>
                </tr>
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
  }
  ReactDOM.render(<Table/>, document.getElementById('summary'));
})();