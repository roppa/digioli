import { JSX } from "preact";

export function Navbar() {
  return (
    <div className="mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <a id="logo" class="navbar-item" title="Digioli" href="/">
              <img
                width="150px"
                src="/logo.svg"
                alt="Digioli"
                class="h-8 w-auto lg:block"
              >
              </img>
            </a>
          </div>
          <div className="sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <a href="/">Home</a>
              <a href="/about">About</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
