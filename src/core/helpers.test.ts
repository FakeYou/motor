import { range } from './helpers';

test.each`
	from  | to    | expected
	${0}  | ${3}  | ${[0, 1, 2, 3]}
	${1}  | ${3}  | ${[1, 2, 3]}
	${-3} | ${2}  | ${[-3, -2, -1, 0, 1, 2]}
	${5}  | ${3}  | ${[5, 4, 3]}
	${2}  | ${-2} | ${[2, 1, 0, -1, -2]}
`('range($from, $to) to return $expected', ({ from, to, expected }) => {
	expect(range(from, to)).toEqual(expected);
});
