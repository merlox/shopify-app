import { SettingToggle, TextStyle, Button, Form, FormLayout, Stack, TextField, Card, Layout, Page } from '@shopify/polaris'

export default class AnnotatedLayout extends React.Component {
    state = {
        discount: '10%',
        enabled: false,
    }

    handleSubmit = () => {
        this.setState({
            discount: this.state.discount
        })
        console.log('Submitted', this.state)
    }

    handleChange = field => {
        return value => this.setState({ [field]: value })
    }

    handleToggle = () => {
        this.setState(({ enabled }) => {
            return { enabled: !enabled }
        })
    }

    render () {
        const contentStatus = this.state.enabled ? 'Disabled' : 'Enable'
        const textStatus = this.state.enabled ? 'enabled' : 'disabled'

        return (
            <Page>
                <Layout>
                    <Layout.AnnotatedSection
                        title="Default discounts"
                        description="Add a product to discount magically"
                    >
                        <Card sectioned>
                            <Form onSubmit={this.handleSubmit}>
                                <FormLayout>
                                    <TextField
                                        value={this.state.discount}
                                        onChange={this.handleChange('discount')}
                                        label="Discount percentage"
                                        type="discount"
                                    />
                                    <Stack distribution="trailing">
                                        <Button primary submit>
                                            Save
                                        </Button>
                                    </Stack>
                                </FormLayout>
                            </Form>
                        </Card>
                    </Layout.AnnotatedSection>

                    <Layout.AnnotatedSection
                        title="Price updates"
                        description="Temporarily disable all price updates"
                    >
                        <SettingToggle
                            action={{
                                content: contentStatus,
                                onAction: this.handleToggle,
                            }}
                            enabled={this.state.enabled}
                        >
                            This setting is {' '}
                            <TextStyle variation="strong">{textStatus}</TextStyle>.
                        </SettingToggle>
                    </Layout.AnnotatedSection>
                </Layout>
            </Page>
        )
    }
}
