import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Icon from '../../../adapters/alipay/components/Icon';

describe('Icon', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(
      <Icon className="class" type="info" />
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
