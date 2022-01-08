<!-- ABOUT THE PROJECT -->

## About The Project

A simple test utility for security headers - use either as a console application or CI Action.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This project is built with Node.js and the NPM package "check-my-headers"

- [Node.js](https://nodejs.org/en/)
- [check-my-headers](https://www.npmjs.com/package/check-my-headers)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Node.js installed on your Operating System of choice - [Node.js](https://nodejs.org/en/)

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Lightraine2/ci-headers.git
   ```
2. Install NPM package
   ```sh
   npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

Either define your Application Url inside the "ci-config.json" file or provide as a command line arugment i.e.

```sh
node App.js https://mysite.com
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Error handling for DNS failures
- [ ] Output formatting for highlighting higher severity issues
- [ ] Unit tests

<p align="right">(<a href="#top">back to top</a>)</p>
