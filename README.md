## Vue.js Todo App Sample
Vue.jsのTodoアプリサンプル

Vue.jsにはシンプルに1つのファイル内にすべてのコンポーネントを書く方法とwebpackなどを用いてコンポーネントを複数ファイルに分割する方法がある
前者は```simple```フォルダに、後者は```advance```フォルダに置いた

どちらも```npm install```すること

### simpleな方法を1から作る方法

```sh
mkdir simple
cd simple
npm init
npm install --save vue
```

### advanceな方法を1から作る方法

```sh
npm install -g vue-cli
vue init webpack-simple advance
cd advance
npm install

node run dev
```