@echo OFF
if "%~1" == "" (start "" /min "%comspec%" /c "%~f0" any_word & exit /b)
c:
cd c:\Users\%username%\AppData\Local\Android\sdk\tools
emulator @Pixel_2_API_25