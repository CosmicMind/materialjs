<!-- Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<script lang="ts" setup>
import {
	ref,
	watch,
	onBeforeUnmount,
} from 'vue'

import {
	logger,
} from '@cosmicmind/foundation'

import {
	AppMain,
} from '@/app/contexts/app/components/AppMain'

import {
	object,
	string,
} from 'yup'

import {
	useForm,
} from 'vee-validate'

import {
	TypographySize,
	Display,
	Headline,
	Title,
	Label,
	Body,
	ButtonState,
	FilledButton,
	OutlinedButton,
	TextButton,
	ElevatedButton,
	TonalButton,
	Row,
	Column,
	FormFieldSet,
	FormInput,
	TextFieldState,
	FilledTextField,
	RoundedIcon,
} from '@/index'

const validationSchema = object({
	email: string().required().email().label('Email Address'),
})

// Create a form context with the validation schema
const {
	// meta,
	errors,
	handleSubmit,
} = useForm({
	validationSchema,
	initialValues: {
		email: '',
	},
})

const emailRef = ref<HTMLElement>()

const handleChange = (event: Event): void => {
	const {
		target,
	} = event

	if (target instanceof HTMLInputElement) {
		const $el = emailRef.value
		if ($el instanceof HTMLElement) {
			if (0 === target.value.length) {
				$el.classList.add('is-empty')
			}
			else {
				$el.classList.remove('is-empty')
			}
		}
	}
}

const unwatchEmailRef = watch(emailRef, email => {
	email?.classList.add('is-empty')
})

const unwatchErrors = watch(errors, errors => {
	if (errors.email) {
		emailRef.value?.classList.add('error')
	}
	else {
		emailRef.value?.classList.remove('error')
	}

	logger.log('errors', errors)
})

const onSubmit = handleSubmit((data): void => {
	logger.log(data)
})

onBeforeUnmount(() => {
	unwatchErrors()
	unwatchEmailRef()
})

</script>

<template>
  <AppMain>
    <div>
      <section class="banner">
        <Display :size="TypographySize.large">
          Typography
        </Display>
        <Body :size="TypographySize.large">
          See the <a
            href="https://m3.material.io/styles/typography/overview"
            target="_blank"
          >Design Guidelines</a>
        </Body>
      </section>
      <section>
        <Display :size="TypographySize.small">
          Display
        </Display>
        <div>
          <Display :size="TypographySize.large">
            Display Large - Roboto 57/64 . 0
          </Display>
          <Display :size="TypographySize.medium">
            Display Medium - Roboto 45/52 .  0
          </Display>
          <Display :size="TypographySize.small">
            Display Small - Roboto 36/44 . 0
          </Display>
        </div>
      </section>
      <section>
        <Display :size="TypographySize.small">
          Headline
        </Display>
        <div>
          <Headline :size="TypographySize.large">
            Headline Large - Roboto 32/40 . 0
          </Headline>
          <Headline :size="TypographySize.medium">
            Headline Medium - Roboto 28/36 . 0
          </Headline>
          <Headline :size="TypographySize.small">
            Headline Small - Roboto 24/32 . 0
          </Headline>
        </div>
      </section>
      <section>
        <Display :size="TypographySize.small">
          Title
        </Display>
        <div>
          <Title :size="TypographySize.large">
            Title Large - Roboto Medium 22/28 . 0
          </Title>
          <Title :size="TypographySize.medium">
            Title Medium - Roboto Medium 16/24 . +0.15
          </Title>
          <Title :size="TypographySize.small">
            Title Small - Roboto Medium 14/20 . +0.1
          </Title>
        </div>
      </section>
      <section>
        <Display :size="TypographySize.small">
          Label
        </Display>
        <div>
          <Label :size="TypographySize.large">
            Label Large - Roboto Medium 14/20 . +0.1
          </Label>
          <Label :size="TypographySize.medium">
            Label Medium - Roboto Medium 12/16 . +0.5
          </Label>
          <Label :size="TypographySize.small">
            Label Small - Roboto Medium 11/16 . +0.5
          </Label>
        </div>
      </section>
      <section>
        <Display :size="TypographySize.small">
          Body
        </Display>
        <div>
          <Body :size="TypographySize.large">
            Body Large - Roboto 16/24 . +0.15
          </Body>
          <Body :size="TypographySize.medium">
            Body Medium - Roboto 14/20 . +0.25
          </Body>
          <Body :size="TypographySize.small">
            Body Small - Roboto 12/16 . +0.4
          </Body>
        </div>
      </section>
    </div>

    <div>
      <section class="banner">
        <Display :size="TypographySize.large">
          Buttons
        </Display>
        <Body :size="TypographySize.large">
          See the <a
            href="https://m3.material.io/components/buttons/overview"
            target="_blank"
          >Design Guidelines</a>
        </Body>
      </section>
      <section>
        <Display :size="TypographySize.small">
          Filled button states
        </Display>
        <div>
          <Row>
            <Column>
              <FilledButton>
                Enabled
              </FilledButton>
            </Column>
            <Column>
              <FilledButton :state="ButtonState.hovered">
                Hovered
              </FilledButton>
            </Column>
            <Column>
              <FilledButton :state="ButtonState.focused">
                Focused
              </FilledButton>
            </Column>
            <Column>
              <FilledButton :state="ButtonState.pressed">
                Pressed
              </FilledButton>
            </Column>
            <Column>
              <FilledButton
                :state="ButtonState.disabled"
                disabled
              >
                Disabled
              </FilledButton>
            </Column>
          </Row>
        </div>
      </section>
      <section>
        <Display :size="TypographySize.small">
          Outlined button states
        </Display>
        <div>
          <Row>
            <Column>
              <OutlinedButton>
                Enabled
              </OutlinedButton>
            </Column>
            <Column>
              <OutlinedButton :state="ButtonState.hovered">
                Hovered
              </OutlinedButton>
            </Column>
            <Column>
              <OutlinedButton :state="ButtonState.focused">
                Focused
              </OutlinedButton>
            </Column>
            <Column>
              <OutlinedButton :state="ButtonState.pressed">
                Pressed
              </OutlinedButton>
            </Column>
            <Column>
              <OutlinedButton
                :state="ButtonState.disabled"
                disabled
              >
                Disabled
              </OutlinedButton>
            </Column>
          </Row>
        </div>
      </section>
      <section>
        <Display :size="TypographySize.small">
          Text button states
        </Display>
        <div>
          <Row>
            <Column>
              <TextButton>
                Enabled
              </TextButton>
            </Column>
            <Column>
              <TextButton :state="ButtonState.hovered">
                Hovered
              </TextButton>
            </Column>
            <Column>
              <TextButton :state="ButtonState.focused">
                Focused
              </TextButton>
            </Column>
            <Column>
              <TextButton :state="ButtonState.pressed">
                Pressed
              </TextButton>
            </Column>
            <Column>
              <TextButton
                :state="ButtonState.disabled"
                disabled
              >
                Disabled
              </TextButton>
            </Column>
          </Row>
        </div>
      </section>
      <section>
        <Display :size="TypographySize.small">
          Elevated button states
        </Display>
        <div>
          <Row>
            <Column>
              <ElevatedButton>
                Enabled
              </ElevatedButton>
            </Column>
            <Column>
              <ElevatedButton :state="ButtonState.hovered">
                Hovered
              </ElevatedButton>
            </Column>
            <Column>
              <ElevatedButton :state="ButtonState.focused">
                Focused
              </ElevatedButton>
            </Column>
            <Column>
              <ElevatedButton :state="ButtonState.pressed">
                Pressed
              </ElevatedButton>
            </Column>
            <Column>
              <ElevatedButton
                :state="ButtonState.disabled"
                disabled
              >
                Disabled
              </ElevatedButton>
            </Column>
          </Row>
        </div>
      </section>
      <section>
        <Display :size="TypographySize.small">
          Tonal button states
        </Display>
        <div>
          <Row>
            <Column>
              <TonalButton>
                Enabled
              </TonalButton>
            </Column>
            <Column>
              <TonalButton :state="ButtonState.hovered">
                Hovered
              </TonalButton>
            </Column>
            <Column>
              <TonalButton :state="ButtonState.focused">
                Focused
              </TonalButton>
            </Column>
            <Column>
              <TonalButton :state="ButtonState.pressed">
                Pressed
              </TonalButton>
            </Column>
            <Column>
              <TonalButton
                :state="ButtonState.disabled"
                disabled
              >
                Disabled
              </TonalButton>
            </Column>
          </Row>
        </div>
      </section>
    </div>

    <div>
      <section class="banner">
        <Display :size="TypographySize.large">
          Text fields
        </Display>
        <Body :size="TypographySize.large">
          See the <a
            href="https://m3.material.io/components/text-fields/overview"
            target="_blank"
          >Design Guidelines</a>
        </Body>
      </section>
      <section>
        <Display :size="TypographySize.small">
          Filled text field states
        </Display>
        <div>
          <Row>
            <Column>
              <form @submit="onSubmit">
                <FormFieldSet>
                  <FilledTextField ref="emailRef">
                    <template #leading>
                      <RoundedIcon class="leading">
                        mail
                      </RoundedIcon>
                    </template>
                    <template #text>
                      <Label
                        name="email"
                        class="text"
                      >
                        Email
                      </Label>
                    </template>
                    <template #input>
                      <FormInput
                        name="email"
                        @change="handleChange"
                      />
                    </template>
                    <template
                      v-if="errors.email"
                      #trailing
                    >
                      <RoundedIcon class="trailing">
                        error
                      </RoundedIcon>
                    </template>
                    <template
                      v-if="errors.email"
                      #supporting
                    >
                      <Label class="supporting">
                        {{ errors.email }}
                      </Label>
                    </template>
                  </FilledTextField>
                </FormFieldSet>
              </form>
            </Column>
            <Column>
              <form @submit="onSubmit">
                <FormFieldSet>
                  <FilledTextField :state="TextFieldState.hovered">
                    <template #leading>
                      <RoundedIcon class="leading">
                        mail
                      </RoundedIcon>
                    </template>
                    <template #text>
                      <Label
                        name="email"
                        class="text"
                      >
                        Email
                      </Label>
                    </template>
                    <template #input>
                      <FormInput name="email" />
                    </template>
                    <template
                      v-if="errors.email"
                      #supporting
                    >
                      <Label class="supporting">
                        {{ errors.email }}
                      </Label>
                    </template>
                  </FilledTextField>
                </FormFieldSet>
              </form>
            </Column>
            <Column>
              <form @submit="onSubmit">
                <FormFieldSet>
                  <FilledTextField :state="TextFieldState.focused">
                    <template #leading>
                      <RoundedIcon class="leading">
                        mail
                      </RoundedIcon>
                    </template>
                    <template #text>
                      <Label
                        name="email"
                        class="text"
                      >
                        Email
                      </Label>
                    </template>
                    <template #input>
                      <FormInput name="email" />
                    </template>
                    <template #trailing>
                      <RoundedIcon class="trailing">
                        close
                      </RoundedIcon>
                    </template>
                    <template
                      v-if="errors.email"
                      #supporting
                    >
                      <Label class="supporting">
                        {{ errors.email }}
                      </Label>
                    </template>
                  </FilledTextField>
                </FormFieldSet>
              </form>
            </Column>
            <Column>
              <form @submit="onSubmit">
                <FormFieldSet>
                  <FilledTextField :state="TextFieldState.disabled">
                    <template #leading>
                      <RoundedIcon class="leading">
                        mail
                      </RoundedIcon>
                    </template>
                    <template #text>
                      <Label
                        name="email"
                        class="text"
                      >
                        Email
                      </Label>
                    </template>
                    <template #input>
                      <FormInput name="email" />
                    </template>
                    <template
                      v-if="errors.email"
                      #supporting
                    >
                      <Label class="supporting">
                        {{ errors.email }}
                      </Label>
                    </template>
                  </FilledTextField>
                </FormFieldSet>
              </form>
            </Column>
          </Row>
        </div>
        <Display :size="TypographySize.small">
          Filled text field error states
        </Display>
        <div>
          <div>
            <Row>
              <Column>
                <form @submit="onSubmit">
                  <FormFieldSet>
                    <FilledTextField :has-error="true">
                      <template #leading>
                        <RoundedIcon class="leading">
                          mail
                        </RoundedIcon>
                      </template>
                      <template #text>
                        <Label
                          name="email"
                          class="text"
                        >
                          Email
                        </Label>
                      </template>
                      <template #input>
                        <FormInput name="email" />
                      </template>
                      <template #trailing>
                        <RoundedIcon class="trailing">
                          close
                        </RoundedIcon>
                      </template>
                      <template
                        v-if="errors.email"
                        #supporting
                      >
                        <Label class="supporting">
                          {{ errors.email }}
                        </Label>
                      </template>
                    </FilledTextField>
                  </FormFieldSet>
                </form>
              </Column>
              <Column>
                <form @submit="onSubmit">
                  <FormFieldSet>
                    <FilledTextField
                      :state="TextFieldState.hovered"
                      :has-error="true"
                    >
                      <template #leading>
                        <RoundedIcon class="leading">
                          mail
                        </RoundedIcon>
                      </template>
                      <template #text>
                        <Label
                          name="email"
                          class="text"
                        >
                          Email
                        </Label>
                      </template>
                      <template #input>
                        <FormInput name="email" />
                      </template>
                      <template
                        v-if="errors.email"
                        #supporting
                      >
                        <Label class="supporting">
                          {{ errors.email }}
                        </Label>
                      </template>
                    </FilledTextField>
                  </FormFieldSet>
                </form>
              </Column>
              <Column>
                <form @submit="onSubmit">
                  <FormFieldSet>
                    <FilledTextField
                      :state="TextFieldState.focused"
                      :has-error="true"
                    >
                      <template #leading>
                        <RoundedIcon class="leading">
                          mail
                        </RoundedIcon>
                      </template>
                      <template #text>
                        <Label
                          name="email"
                          class="text"
                        >
                          Email
                        </Label>
                      </template>
                      <template #input>
                        <FormInput name="email" />
                      </template>
                      <template #trailing>
                        <RoundedIcon class="trailing">
                          close
                        </RoundedIcon>
                      </template>
                      <template
                        v-if="errors.email"
                        #supporting
                      >
                        <Label class="supporting">
                          {{ errors.email }}
                        </Label>
                      </template>
                    </FilledTextField>
                  </FormFieldSet>
                </form>
              </Column>
              <Column>
                <form @submit="onSubmit">
                  <FormFieldSet>
                    <FilledTextField :state="TextFieldState.disabled">
                      <template #leading>
                        <RoundedIcon class="leading">
                          mail
                        </RoundedIcon>
                      </template>
                      <template #text>
                        <Label
                          name="email"
                          class="text"
                        >
                          Email
                        </Label>
                      </template>
                      <template #input>
                        <FormInput name="email" />
                      </template>
                      <template
                        v-if="errors.email"
                        #supporting
                      >
                        <Label class="supporting">
                          {{ errors.email }}
                        </Label>
                      </template>
                    </FilledTextField>
                  </FormFieldSet>
                </form>
              </Column>
            </Row>
          </div>
        </div>
      </section>
    </div>
  </AppMain>
</template>

<style lang="sass" scoped>
  @use '@/lib/sass/theme'

  section
    padding: 48px

    &.banner
      > span
        padding: 12px

    a
      @include theme.preferred
        color: theme.style(primary)

    > .display
      padding: 24px 0

    > div
      > span
        padding: 12px

    .text-field
      width: 300px

</style>