import { Col, Row } from "react-bootstrap"
import { FormattedMessage, useIntl } from "react-intl"
import LogoIcon from "../../assets/images/svg/ico-logo.svg?react"
import RestartIcon from "../../assets/images/svg/ico-restart.svg?react"
import SettingsIcon from "../../assets/images/svg/ico-settings.svg?react"
import MessageModal from "../modal/MessageModal"
import SettingsModal from "../modal/SettingsModal"
import styles from "./Header.module.scss"
import useHeaderProps from "./hooks/useHeaderProps"

const Header = () => {
  const { formatMessage } = useIntl()
  const props = useHeaderProps()
  const { settingsModalProps, messageModalProps } = props

  return (
    <>
      <Row className="my-4 header">
        <Col
          sm={12}
          md={4}
          className="text-start text-sm-center text-md-start mb-4 mb-md-0"
        >
          <LogoIcon style={{ cursor: "default" }} />
        </Col>
        <Col sm={12} md={4} className="text-center">
          <section className="d-flex justify-content-center align-items-center h-100">
            <article
              className="primary h1 my-0 gilroy-heavy"
              style={{ minWidth: "90px" }}
            >
              {props.timer}
            </article>
            <div className="d-flex flex-column justify-content-between border-start">
              <article className="pt-0 pb-2 px-3 border-bottom">
                <FormattedMessage
                  id="count-matches"
                  values={{ count: props.matchedCount }}
                />
              </article>
              <article className="pb-0 pt-2 px-3">
                <FormattedMessage
                  id="count-mistakes"
                  values={{ count: props.mistakesCount }}
                />
              </article>
            </div>
          </section>
        </Col>
        <Col sm={12} md={4} className={styles.headerMenu}>
          <section className="d-flex align-items-center justify-content-end h-100">
            <article
              className="px-3 py-2 border-end"
              title={formatMessage({ id: "modal.game-settings" })}
            >
              <SettingsIcon onClick={props.handleOpenModal} role="button" />
            </article>
            <article
              className="ps-3 pe-2 py-2"
              title={formatMessage({ id: "header.icon.title.restart-game" })}
            >
              <RestartIcon onClick={props.handleRestart} role="button" />
            </article>
          </section>
        </Col>
      </Row>
      {props.modalOpen && !props.message && (
        <SettingsModal {...settingsModalProps} />
      )}
      {props.message && <MessageModal {...messageModalProps} />}
    </>
  )
}

export { Header as default }
