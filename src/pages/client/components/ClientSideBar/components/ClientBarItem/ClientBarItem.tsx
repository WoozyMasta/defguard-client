import { autoUpdate, useFloating } from '@floating-ui/react';
import classNames from 'classnames';
import { useMatch, useNavigate } from 'react-router-dom';

import SvgIconConnection from '../../../../../../shared/defguard-ui/components/svg/IconConnection';
import { routes } from '../../../../../../shared/routes';
import { useClientStore } from '../../../../hooks/useClientStore';
import { WireguardInstanceType } from '../../../../types';

interface BaseInstance {
  id?: number;
  name: string;
  // Connected
  active: boolean;
  type: WireguardInstanceType;
}

type Props<T extends BaseInstance> = {
  instance: T;
};

export const ClientBarItem = <T extends BaseInstance>({ instance }: Props<T>) => {
  const instancePage = useMatch('/client/');
  const navigate = useNavigate();
  const setClientStore = useClientStore((state) => state.setState);
  const selectedInstance = useClientStore((state) => state.selectedInstance);

  const active =
    instance.type === selectedInstance?.type && instance.id === selectedInstance.id;

  const cn = classNames('client-bar-item', 'clickable', {
    active: active,
    connected: instance.active,
  });

  const { refs, floatingStyles } = useFloating({
    placement: 'right',
    whileElementsMounted: (refElement, floatingElement, updateFunc) =>
      autoUpdate(refElement, floatingElement, updateFunc),
  });

  return (
    <>
      <div
        className={cn}
        ref={refs.setReference}
        onClick={() => {
          if (instance.type === WireguardInstanceType.DEFGUARD_INSTANCE) {
            setClientStore({
              selectedInstance: {
                id: instance.id as number,
                type: WireguardInstanceType.DEFGUARD_INSTANCE,
              },
            });
          } else {
            setClientStore({
              selectedInstance: {
                id: instance.id as number,
                type: WireguardInstanceType.TUNNEL,
              },
            });
          }
          if (!instancePage) {
            navigate(routes.client.base, { replace: true });
          }
        }}
      >
        <SvgIconConnection className="connection-icon" />
        <p>{instance.name}</p>
        <div className="instance-shorted">
          <SvgIconConnection className="connection-icon" />
          <p>{instance.name[0]}</p>
        </div>
      </div>
      {instance.active && (
        <div
          className="client-bar-active-item-bar"
          ref={refs.setFloating}
          style={floatingStyles}
        ></div>
      )}
    </>
  );
};
