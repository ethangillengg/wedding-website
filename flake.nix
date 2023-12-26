{
  description = "A basic flake with a shell";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = {
    self,
    nixpkgs,
    flake-utils,
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs {
        system = "x86_64-linux"; # or something else
        config = {allowUnfree = true;};
      };
    in {
      devShell = pkgs.mkShell {
        nativeBuildInputs = [pkgs.bashInteractive];
        buildInputs = with pkgs; [
          vscode-langservers-extracted
          nodePackages.prettier_d_slim
          nodePackages.prettier
          nodejs
          # LSP
          biome
          nodePackages.typescript-language-server
        ];
      };
    });
}
