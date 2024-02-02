

This repository contains examples and explanations for building a real-world Redux application, covering concepts such as Normalizr, core Redux concepts, handling asynchronous actions, and writing tests.

## Table of Contents

- [Normalizr's Purpose and How to Use It](#normalizrs-purpose-and-how-to-use-it)
- [Core Concepts of Redux](#core-concepts-of-redux)
  - [Store](#store)
  - [Actions](#actions)
  - [Reducers](#reducers)
- [Async Actions in Redux](#async-actions-in-redux)
- [Writing Tests for Redux](#writing-tests-for-redux)
  - [Unit Tests for Reducers](#unit-tests-for-reducers)
  - [Mocking Async Actions](#mocking-async-actions)

## Normalizr's Purpose and How to Use It

Normalizr is a JavaScript library that helps in normalizing nested JSON data. It simplifies complex, nested structures into a flat format for easier management.

**Usage Example:**
```javascript
const data = {
  id: 1,
  title: 'A Blog Post',
  author: {
    id: 7,
    name: 'John Doe',
  },
};

// Define Schemas
const userSchema = new schema.Entity('users');
const articleSchema = new schema.Entity('articles', { author: userSchema });

// Normalize Data
const normalizedData = normalize(data, articleSchema);
```

## Core Concepts of Redux

### Store

```javascript
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
```

### Actions

**Action Types:**
```javascript
const INCREMENT = 'INCREMENT';
```

**Action Creator:**
```javascript
const increment = () => ({
  type: INCREMENT,
});
```

### Reducers

```javascript
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    default:
      return state;
  }
};

export default counterReducer;
```

## Async Actions in Redux

Assuming an asynchronous API call:
```javascript
const fetchAsyncData = () => async (dispatch) => {
  dispatch({ type: 'FETCH_START' });

  try {
    const data = await fetchData(); // Some asynchronous API call
    dispatch({ type: 'DATA_RECEIVED', payload: data });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error.message });
  }
};
```

## Writing Tests for Redux

### Unit Tests for Reducers

```javascript
it('should handle INCREMENT action', () => {
  const newState = counterReducer({ count: 0 }, { type: INCREMENT });
  expect(newState).toEqual({ count: 1 });
});
```

### Mocking Async Actions

```javascript
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

it('dispatches the correct actions for async fetch', async () => {
  const expectedActions = [
    { type: 'FETCH_START' },
    { type: 'DATA_RECEIVED', payload: mockData },
  ];

  const store = mockStore(initialState);

  await store.dispatch(fetchAsyncData());
  expect(store.getActions()).toEqual(expectedActions);
});
```

