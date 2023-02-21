import { ConnectButton } from '@rainbow-me/rainbowkit'
import { truncateAddress } from '~/utils/general'
import { Button } from '../Buttton'
import { CustomRainbowButtonProps } from './CustomRainbowButton.types'

export const CustomRainbowButton = ({
  disabled,
}: CustomRainbowButtonProps): JSX.Element => {
  // weird styling is so that we don't display the button unless the rainbow provider is mounted
  return (
    <>
      <ConnectButton.Custom>
        {({ account, chain, openConnectModal, openAccountModal, mounted }) => {
          const connected = mounted && account && chain

          return (
            <div
              {...(!mounted && {
                'aria-hidden': true,
                style: {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {!connected && (
                <Button
                  onClick={() => openConnectModal()}
                  disabled={disabled}
                  className="font-bold"
                >
                  Connect
                </Button>
              )}
              {!!account?.address && (
                <Button
                  onClick={() => openAccountModal()}
                  className="font-bold"
                >
                  {truncateAddress(account.address)}
                </Button>
              )}
            </div>
          )
        }}
      </ConnectButton.Custom>
    </>
  )
}
