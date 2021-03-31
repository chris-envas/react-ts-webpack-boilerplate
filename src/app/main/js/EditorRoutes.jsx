import React from 'react';
import { Route } from 'react-router';
import { EditorPage } from './EditorPage';

export default function EditorRoutest () {
  return (
      <Route>
        <Route path="/" component={EditorPage} />
      </Route>
  )
}
