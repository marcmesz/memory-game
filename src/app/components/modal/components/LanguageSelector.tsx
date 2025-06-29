import { Col, Dropdown, DropdownButton, Row } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import type { SupportedLocale } from "../../../slice"

interface LanguageSelectorProps {
  locale: SupportedLocale
  onChange: (locale: SupportedLocale) => void
}

const LanguageSelector = ({ locale, onChange }: LanguageSelectorProps) => {
  return (
    <Row className="d-flex align-items-center justify-content-center">
      <Col md={8}>
        <FormattedMessage id="modal.lang" />
      </Col>
      <Col className="gilroy-regular text-end">
        <DropdownButton
          id="dropdown-item-button"
          title={locale}
          variant="light"
          drop="end"
        >
          <Dropdown.Item
            active={locale === "EN"}
            as="button"
            onClick={() => onChange("EN")}
          >
            EN - English
          </Dropdown.Item>
          <Dropdown.Item
            active={locale === "HU"}
            as="button"
            onClick={() => onChange("HU")}
          >
            HU - Magyar
          </Dropdown.Item>
        </DropdownButton>
      </Col>
    </Row>
  )
}

export { LanguageSelector as default }
