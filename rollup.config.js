import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-exclude-dependencies-from-bundle';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      external(),
      resolve({
        extensions: ['.js', '.ts'],
        preferBuiltins: true,
      }),
      commonjs(),
      babel({
        babelHelpers: 'runtime',
        extensions: ['.js', '.ts'],
      }),
    ],
  },
];
