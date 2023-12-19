import { useStorageLocal } from '~/composables/useStorageLocal'
import { AppPage } from '~/enums/appEnums'
import type { Settings } from '~/models/settings'

export const storageDemo = useStorageLocal('webext-demo', 'Storage Demo')
export const accessKey = useStorageLocal('accessKey', '')

export const settings = useStorageLocal('settings', ref<Settings>({
  language: '',
  startupPage: AppPage.Home,
  enableHorizontalScrolling: false,
  openLinkInCurrentTab: false,
  enableVideoCtrlBarOnVideoCard: false,
  isShowTopbar: true,
  autoHideTopbar: false,
  dockPosition: 'right',
  autoHideDock: false,

  theme: 'auto',
  themeColor: '#00a1d6',
  adaptToOtherPageStyles: true,
  wallpaperMode: 'buildIn',
  wallpaper: '',
  enableWallpaperMasking: false,
  wallpaperMaskOpacity: 0,
  wallpaperBlurIntensity: 0,

  searchPageDarkenOnSearchFocus: true,
  searchPageBlurredOnSearchFocus: false,
  searchPageLogoColor: 'themeColor',
  searchPageLogoGlow: true,
  searchPageShowLogo: true,
  searchPageSearchBarFocusCharacter: '',
  individuallySetSearchPageWallpaper: false,
  searchPageWallpaperMode: 'buildIn',
  searchPageWallpaper: '',
  searchPageEnableWallpaperMasking: false,
  searchPageWallpaperMaskOpacity: 0,
  searchPageWallpaperBlurIntensity: 0,

  recommendationMode: 'web',
  useSearchPageModeOnHomePage: false,
  searchPageModeWallpaperFixed: false,
}), { mergeDefaults: true })

export const dockItemVisibilityList = useStorageLocal('dockItems', reactive<{ page: AppPage; visible: boolean }[]>([
  // { page: AppPage.Search, visible: true },
  // { page: AppPage.Home, visible: true },
  // { page: AppPage.Anime, visible: true },
  // { page: AppPage.Favorites, visible: true },
  // { page: AppPage.History, visible: true },
  // { page: AppPage.WatchLater, visible: true },
]))
