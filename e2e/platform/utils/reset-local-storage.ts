import { Page } from '@playwright/test'

export async function resetLocalStorage(page: Page, ref: string): Promise<void> {
  // reset page back to table editor page
  await page.evaluate((ref) => {
    localStorage.removeItem('dashboard-history-default')
    localStorage.removeItem(`dashboard-history-${ref}`)
  }, ref)
  await page.waitForTimeout(500) // need to wait for local storage to be removed
}
