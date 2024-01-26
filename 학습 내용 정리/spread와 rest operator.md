# spread와 rest operator

작성일시: 2024년 1월 21일 오후 12:16
복습: No

# spread

spread의 사전적 의미는 펼치다, 퍼뜨리다 이다.

코드 예시를 보며 이해해보자

```jsx
const slime = {
  name: '슬라임'
};

const cuteSlime = {
  name: '슬라임',
  attribute: 'cute'
};

const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
```

위 코드는 기존의 객체를 건드리지않고 새로운 객체를 만든다는 것이다. 이러한 상황에서 유용한 문법이 **spread** 문법이다 

```jsx
const slime = {
  name: '슬라임'
};

const cuteSlime = {
  ...slime,
  attribute: 'cute'
};

const purpleCuteSlime = {
  ...cuteSlime,
  color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
```

상속의 개념과는 다르게 두 객체는 서로 독립적으로 존재하며 한 객체의 속성을 변경해도 다른 객체에 영향을 미치지 않는다. 얕은 복사의 개념은 spread에서 나왔다.

# rest

### 객체에서의 rest

```jsx
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, ...rest } = purpleCuteSlime;
console.log(color);
console.log(rest);

//출력
//purple
//Object {name:'슬라임', attribute:'cure'}
```

rest안에는 color를 제외한 값들이 들어있다.

### 배열에서의 rest

```jsx
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers;

console.log(one);
console.log(rest);

//출력
//0
//[1,2,3,4,5,6]
```

나머지들을 배열로 만들어 리턴한다. 

### 함수에서의 rest

```jsx
function sum(...rest) {
  return rest;
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result);

//출력
[1,2,3,4,5,6]
```

```jsx
function test(a, b, ...rest){ // Rest 파라미터 (...rest)
  console.log(a, b); // 1 2
  console.log(rest); // [3, 4, 5]
}
test(1, 2, 3, 4, 5);
```

```jsx
function myFunc(a, b, ...rest){
  console.log(a); // 1
  console.log(b); // 2
  console.log(rest); // [3, 4, 5]
}
// spread 연산자는 역할에 맞게 자유로이 사용
const arrA = [1, 2];
const arrB = [3, 4, 5];
myFunc(...arr, ...arrB); // arrA가 전개되어 1, 2가 되고, arrB가 전개되어 3, 4, 5가 된다. 즉, myFunc(1, 2, 3, 4, 5)와 동일하다.
```