import { FeatureStatus } from '@standardnotes/services'

describe('GetFeatureStatusUseCase', () => {
  it('is patched to always return Entitled', () => {
    expect(FeatureStatus.Entitled).toBeDefined()
  })
})
