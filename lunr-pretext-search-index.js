var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase-2",
  "level": "1",
  "url": "shorttitlelowercase-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Author X. Lastname    This is the abstract.   "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1",
  "title": "My First Section",
  "body": " My First Section   Some words    My First Subsection  Some more words  foo   A frog   A nice-looking frog with a longish description.    Bar:        <statement> of an <exercise>  <exercise> <statement> Sketch the solid described by , , and .      <answer> of an <exercise>  <exercise> <answer>    A figure generated with TikZ via \\LaTeX{}       Asymptote Lever Demonstration   moments on a lever   This diagram has two masses at either end of a lever, namely and . They are located at distance and on an axis. The resulting center-of-mass is at a point .       Asymptote Sphere. Scroll and drag to change viewpoint   sphere  Try to get a simple green 3D cube to show up in the PreTeXt output.         "
},
{
  "id": "subsection-1-4",
  "level": "2",
  "url": "section-1.html#subsection-1-4",
  "type": "Figure",
  "number": "1.1",
  "title": "",
  "body": " A frog   A nice-looking frog with a longish description.   "
},
{
  "id": "Stewart6_16-8-11_state",
  "level": "2",
  "url": "section-1.html#Stewart6_16-8-11_state",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": "   <statement> of an <exercise>  <exercise> <statement> Sketch the solid described by , , and .      <answer> of an <exercise>  <exercise> <answer>    A figure generated with TikZ via \\LaTeX{}       Asymptote Lever Demonstration   moments on a lever   This diagram has two masses at either end of a lever, namely and . They are located at distance and on an axis. The resulting center-of-mass is at a point .       Asymptote Sphere. Scroll and drag to change viewpoint   sphere  Try to get a simple green 3D cube to show up in the PreTeXt output.      "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "2",
  "title": "My Additional Section",
  "body": " My Additional Section  foo   The graph made by TikZ   A 5-cycle     bar   Asymptote blue rectangular solid   rectangular solid  Try to get a simple blue 3D parallelopiped to show up in the PreTeXt output.     "
},
{
  "id": "figure-tikz-example-diagram",
  "level": "2",
  "url": "section-2.html#figure-tikz-example-diagram",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": " The graph made by TikZ   A 5-cycle    "
},
{
  "id": "blue-rectangular-solid",
  "level": "2",
  "url": "section-2.html#blue-rectangular-solid",
  "type": "Figure",
  "number": "2.2",
  "title": "",
  "body": " Asymptote blue rectangular solid   rectangular solid  Try to get a simple blue 3D parallelopiped to show up in the PreTeXt output.    "
},
{
  "id": "section-3",
  "level": "1",
  "url": "section-3.html",
  "type": "Section",
  "number": "3",
  "title": "Attempted Problem Set",
  "body": " Attempted Problem Set    The problem to be solved  Answer 1    The problem to be solved    Asymptote skewed cone   hollow cone  Try to get a hollow cone to show up in the PreTeXt output.          The problem to be solved  Answer 1    The problem to be solved    Asymptote skewed cone   hollow cone  Try to get a hollow cone to show up in the PreTeXt output.        "
},
{
  "id": "topic1-badname",
  "level": "2",
  "url": "section-3.html#topic1-badname",
  "type": "Checkpoint",
  "number": "3.1",
  "title": "",
  "body": " The problem to be solved  Answer 1  "
},
{
  "id": "topic1-worsename",
  "level": "2",
  "url": "section-3.html#topic1-worsename",
  "type": "Checkpoint",
  "number": "3.2",
  "title": "",
  "body": " The problem to be solved    Asymptote skewed cone   hollow cone  Try to get a hollow cone to show up in the PreTeXt output.      "
},
{
  "id": "topic2-badname",
  "level": "2",
  "url": "section-3.html#topic2-badname",
  "type": "Checkpoint",
  "number": "3.4",
  "title": "",
  "body": " The problem to be solved  Answer 1  "
},
{
  "id": "topic2-worsename",
  "level": "2",
  "url": "section-3.html#topic2-worsename",
  "type": "Checkpoint",
  "number": "3.5",
  "title": "",
  "body": " The problem to be solved    Asymptote skewed cone   hollow cone  Try to get a hollow cone to show up in the PreTeXt output.      "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
