export default {
  dep: ['dev', 'prod'],
  install: 'always',
  packageManager: 'pnpm',
  reject: [],
  root: true,
  target: 'patch',
  upgrade: true,
  workspaces: true,
};
