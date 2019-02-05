@echo OFF
if "%~1" == "" (start "" /min "%comspec%" /c "%~f0" any_word & exit /b)
c:
cd C:\Users\%username%\AppData\Local\Android\sdk\tools
emulator @Pixel_API_26