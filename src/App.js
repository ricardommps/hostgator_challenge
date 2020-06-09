import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { IntlProvider } from 'react-intl';
import { messages, formats } from './i18n';
import Plans from 'containers/plans/plans';

const App = () => {
  const language = navigator.language;

  return (
    <IntlProvider timeZone="utc" locale={language} messages={messages} formats={formats}>
      <Switch>
        <Route path="/">
          <Redirect to="/plans" />
          <Route path="/plans/">
            <Plans />
          </Route>
        </Route>
      </Switch>
    </IntlProvider>
  );
};

export default App;
