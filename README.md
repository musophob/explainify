# Explainify

Extremely lightweight [jQuery](https://jquery.com/) plugin that hunts down any shell commands in your website and automatically links them to the relevant [explainshell.com](http://explainshell.com/) page.

## Installation

    <script src="path/to/explainify.js"></script>

## Usage

    $(document).ready( function() {
        // call explainify parent elements of the shell command text node
        $('.explain_me').explainify();
    });


### Options

    $(document).ready( function() {
        // options with default value shown
        $('.explain_me').explainify({
            linkClass: 'explanation_link', // choose a class for the generated links
            newWindow: true, // open explainshell.com in new window/tab
            linkTitle: true, // include title attribute on generated link
            linkTitleText: "See What This Command Does At ExplainShell.com" // customise the link title text
        });
    });

### Result

Before explainify:

    <code class="explain_me">mkdir tmp && cd</code>
    <code class="explain_me">ls -alh</code>
    <code class="explain_me">top</code>


After explainify (with default options):

    <a class="explanation_link" href="http://explainshell.com/explain?cmd=mkdir+tmp+&amp;&amp;+cd" target="_blank" title="See What This Command Does At ExplainShell.com">
        <code class="explain_me">mkdir tmp && cd</code>
    </a>
    <a class="explanation_link" href="http://explainshell.com/explain?cmd=ls+-alh" target="_blank" title="See What This Command Does At ExplainShell.com">
        <code class="explain_me">ls -alh</code>
    </a>
    <a class="explanation_link" href="http://explainshell.com/explain?cmd=top" target="_blank" title="See What This Command Does At ExplainShell.com">
        <code class="explain_me">top</code>
    </a>

## Troubleshooting

1. Make sure you have jQuery loaded before `explainify.js`.
2. Make sure the selector being passed to `explainify()` is a direct parent of the shell command text, with no other elements in between.


## Demo

If you're still not convinced, check out [`demo/index.html`](demo/index.html).